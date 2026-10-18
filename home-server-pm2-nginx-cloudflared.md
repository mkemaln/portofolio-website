# Home Server Deployment Guide: PM2, Nginx, and Cloudflare Tunnel

This guide documents the lightweight, Docker-free setup for hosting Next.js applications on a home server.

## 1. Architecture

- **PM2** runs and supervises Node.js / Next.js application processes.
- **Nginx** accepts HTTP requests locally and routes each hostname to the correct application port.
- **Cloudflare Tunnel (`cloudflared`)** exposes Nginx to the internet without requiring inbound port forwarding on the home router.

Example:

| Hostname | Nginx upstream |
|---|---|
| `app.example.com` | `127.0.0.1:3000` |
| `api.example.com` | `127.0.0.1:3001` |

Replace example hostnames and paths with your actual values.

## 2. Install Nginx

On Ubuntu or Debian:

```bash
sudo apt update
sudo apt install -y nginx curl ca-certificates
sudo systemctl enable --now nginx
```

Check the service and configuration:

```bash
systemctl status nginx --no-pager
sudo nginx -t
curl -I http://127.0.0.1
```

Nginx configuration files are commonly stored in `/etc/nginx/sites-available/` and enabled through symlinks in `/etc/nginx/sites-enabled/`.

## 3. Install Node.js and PM2

Use a dedicated non-root account to run applications. In this guide, that account is named `app`; use your existing application account if you already have one.

Create the account only if it does not exist:

```bash
id app || sudo adduser --disabled-password --gecos "" app
```

If using NVM, install it and Node.js as the application account, not as root:

```bash
sudo -iu app
```

In the `app` shell:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc

nvm install 20
nvm alias default 20
npm install -g pm2

node -v
npm -v
pm2 -v
exit
```

If NVM is already installed, skip its installation. Choose a Node.js version supported by your project.

## 4. Run a Next.js app with PM2

Go to the directory containing the app's `package.json`. Run PM2 as the same Linux account that owns the project and its process list.

```bash
cd /path/to/your/project
npm ci
npm run build
```

The project's `package.json` should include a production start script, usually:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

Start the app on a chosen port. Example: port `3001`, bound to localhost:

```bash
HOSTNAME=127.0.0.1 PORT=3001 pm2 start npm --name mkemaln -- start
pm2 status
pm2 logs mkemaln
curl http://127.0.0.1:3001
```

`npm start` runs the Next.js production server. It does not build the project; run `npm run build` first and after each source update.

If the app is already registered with PM2 and you need to change its environment variables, update them when restarting:

```bash
HOSTNAME=127.0.0.1 PORT=3001 pm2 restart mkemaln --update-env
```

If environment changes do not take effect as expected, delete and recreate the PM2 process with the desired environment:

```bash
pm2 delete mkemaln
HOSTNAME=127.0.0.1 PORT=3001 pm2 start npm --name mkemaln -- start
```

Avoid starting the same app twice under different PM2 entries.

## 5. PM2 command reference

Run these commands as the account that owns the PM2 processes.

| Task | Command |
|---|---|
| List applications | `pm2 status` |
| Start Next.js app | `HOSTNAME=127.0.0.1 PORT=3001 pm2 start npm --name mkemaln -- start` |
| View logs | `pm2 logs mkemaln` |
| View recent logs | `pm2 logs mkemaln --lines 100` |
| Restart app | `pm2 restart mkemaln` |
| Stop app but keep its PM2 entry | `pm2 stop mkemaln` |
| Start a stopped app | `pm2 start mkemaln` |
| Remove app from PM2 | `pm2 delete mkemaln` |
| Live CPU/RAM monitor | `pm2 monit` |
| Save current process list | `pm2 save` |
| Show PM2 details | `pm2 show mkemaln` |

`pm2 delete` removes the process from PM2, not the project's files.

### Enable startup after reboot

Run this as the application account:

```bash
pm2 startup
```

PM2 prints a command that must be run with administrative privileges. Copy and execute the exact command it prints. Then, as the application account, save the process list:

```bash
pm2 save
```

After a reboot, check `pm2 status`. If you change the Node.js installation or version later, regenerate the startup integration with `pm2 startup` and follow its printed instructions.

Do not run the application processes as root unless there is a specific, justified reason.

## 6. Configure Nginx for a Next.js app

Create a site configuration:

```bash
sudo nano /etc/nginx/sites-available/app.example.com
```

Example configuration for an app listening on `127.0.0.1:3001`:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name app.example.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;

        # WebSocket / upgrade support
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Enable the site and validate the configuration:

```bash
sudo ln -s /etc/nginx/sites-available/app.example.com \
  /etc/nginx/sites-enabled/app.example.com

sudo nginx -t
sudo systemctl reload nginx
```

If the symlink already exists, do not create it again. For another app, create a separate server block with its own `server_name` and upstream port.

For a Cloudflare Tunnel whose public hostname service targets `http://localhost:80`, the original hostname is passed to Nginx and matched against `server_name`. Keep the upstream application ports bound to localhost where possible.

## 7. Install and configure Cloudflare Tunnel

A remotely managed tunnel is convenient for this setup.

1. In the Cloudflare dashboard, open **Networks → Tunnels** and create a tunnel.
2. Choose the Linux connector and the correct architecture.
3. Follow the dashboard's installation command for the server. Treat the tunnel token as a secret; do not commit it to Git or share it.
4. Wait for the connector to show as healthy.
5. Add public hostnames that route to Nginx:

| Public hostname | Service |
|---|---|
| `app.example.com` | `http://localhost:80` |
| `api.example.com` | `http://localhost:80` |

Nginx then routes each hostname to the corresponding local app port. A separate tunnel per application is not normally needed.

Check the connector service:

```bash
sudo systemctl status cloudflared --no-pager
sudo journalctl -u cloudflared -n 50 --no-pager
```

The exact service installation command depends on the method shown in the Cloudflare dashboard. Follow that method rather than mixing remote-managed and locally-managed tunnel configurations.

Official documentation:
- Cloudflare Tunnel: https://developers.cloudflare.com/tunnel/
- PM2 quick start: https://pm2.io/docs/runtime/quick-start/
- Nginx documentation: https://nginx.org/en/docs/

## 8. Deploying an update

### If building on the home server

From the project directory:

```bash
git pull
npm ci                 # Run when refreshing dependencies from package-lock.json
npm run build
pm2 restart mkemaln
pm2 save
```

Run `npm ci` only when appropriate. It removes the current `node_modules` directory before installing from `package-lock.json`.

The new build must finish successfully before restarting the app. Updating `.next` in place while the old process is serving requests can cause inconsistent assets or downtime. For safer deployments, build into a separate release directory and switch to the new release only after it is complete.

### If building locally and uploading to the server

1. Build the project on the development machine.
2. Transfer the required production files to the server, including a compatible `.next` build, `package.json`, lockfile, required public assets, and production dependencies.
3. Ensure the server's Node.js version and environment variables match the application.
4. Switch to the new release and restart the PM2 process.

A `.next` directory alone is not always a complete deployment. The exact files required depend on the project and whether Next.js standalone output is configured. Avoid overwriting the live build directory while it is serving traffic.

## 9. Troubleshooting

### PM2 says `ecosystem.config.js` not found

A command such as `pm2 start --name mkemaln` does not specify an executable script. For a Next.js app, run this from the project directory:

```bash
HOSTNAME=127.0.0.1 PORT=3001 pm2 start npm --name mkemaln -- start
```

An ecosystem file is optional; it is not required for this command.

### App is not reachable

```bash
pm2 status
pm2 logs mkemaln --lines 100
curl -I http://127.0.0.1:3001
sudo nginx -t
sudo journalctl -u nginx -n 50 --no-pager
sudo journalctl -u cloudflared -n 50 --no-pager
sudo ss -ltnp
```

Check that:
- PM2 reports the app as online.
- The app is listening on the port configured in Nginx.
- Nginx's `server_name` matches the requested hostname.
- The Cloudflare public hostname targets Nginx on port 80.
- DNS, tunnel status, and any access policies are correct.

### Check services

```bash
sudo systemctl status nginx --no-pager
sudo systemctl status cloudflared --no-pager
```

## 10. Security and maintenance notes

- Do not forward application ports such as `3000` or `3001` from the router.
- Bind app ports to `127.0.0.1` when only Nginx needs to access them.
- Do not expose PM2's management interface publicly.
- Keep the Cloudflare Tunnel token secret.
- Back up environment files and other deployment configuration securely; do not commit secrets.
- Use `pm2 save` after intentionally changing the process list.
- PM2 manages processes; it does not build Next.js automatically.
- PM2 apps are processes, not Docker containers. `pm2 stop` stops an app; `pm2 delete` removes it from PM2's list. Neither command deletes project files.
