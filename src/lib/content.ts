import fs from "node:fs";
import path from "node:path";

export type Collection = "projects" | "experience";

export type EntryFrontmatter = {
  title: string;
  order?: number;
  featured?: boolean;
  tags?: string[];
  stack?: string[];
  period?: string;
  company?: string;
  location?: string;
  role?: string;
  href?: string;
  summary?: string;
  draft?: boolean;
};

export type Entry = {
  collection: Collection;
  slug: string;
  frontmatter: EntryFrontmatter;
  body: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function collectionDir(collection: Collection): string {
  return path.join(CONTENT_ROOT, collection);
}

/** Minimal, dependency-free frontmatter parser for `key: value` pairs. */
function parseFrontmatter(raw: string): {
  frontmatter: Record<string, unknown>;
  body: string;
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) {
    return { frontmatter: {}, body: raw };
  }

  const frontmatter: Record<string, unknown> = {};

  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf(":");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const rawValue = trimmed.slice(separator + 1).trim();

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      frontmatter[key] = rawValue
        .slice(1, -1)
        .split(",")
        .map((value) => value.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }

    const unquoted = rawValue.replace(/^["']|["']$/g, "");

    if (unquoted === "true" || unquoted === "false") {
      frontmatter[key] = unquoted === "true";
      continue;
    }

    if (unquoted !== "" && !Number.isNaN(Number(unquoted))) {
      frontmatter[key] = Number(unquoted);
      continue;
    }

    frontmatter[key] = unquoted;
  }

  return { frontmatter, body: raw.slice(match[0].length) };
}

function toEntry(collection: Collection, slug: string, raw: string): Entry {
  const { frontmatter, body } = parseFrontmatter(raw);

  return {
    collection,
    slug,
    frontmatter: {
      title: String(frontmatter.title ?? slug),
      order:
        frontmatter.order === undefined ? undefined : Number(frontmatter.order),
      featured: frontmatter.featured === true,
      tags: Array.isArray(frontmatter.tags)
        ? (frontmatter.tags as string[])
        : undefined,
      stack: Array.isArray(frontmatter.stack)
        ? (frontmatter.stack as string[])
        : undefined,
      period:
        frontmatter.period === undefined ? undefined : String(frontmatter.period),
      company:
        frontmatter.company === undefined
          ? undefined
          : String(frontmatter.company),
      location:
        frontmatter.location === undefined
          ? undefined
          : String(frontmatter.location),
      role: frontmatter.role === undefined ? undefined : String(frontmatter.role),
      href: frontmatter.href === undefined ? undefined : String(frontmatter.href),
      summary:
        frontmatter.summary === undefined ? undefined : String(frontmatter.summary),
      draft: frontmatter.draft === true,
    },
    body: body.trim(),
  };
}

/**
 * Reads every MDX file in a collection, sorted oldest-first by `order`.
 * `order` is 1-based and maps to the mockup's "01 / 02 / 03" index, so a
 * lower order means a more recent entry. Entries without `order` sort last,
 * alphabetically by title.
 */
export function getEntries(collection: Collection): Entry[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) =>
      toEntry(
        collection,
        file.replace(/\.mdx$/, ""),
        fs.readFileSync(path.join(dir, file), "utf8"),
      ),
    )
    .filter((entry) => !entry.frontmatter.draft)
    .sort((a, b) => {
      const aOrder = a.frontmatter.order ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.frontmatter.order ?? Number.MAX_SAFE_INTEGER;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });
}

export function getEntry(collection: Collection, slug: string): Entry | null {
  const filePath = path.join(collectionDir(collection), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return toEntry(collection, slug, fs.readFileSync(filePath, "utf8"));
}
