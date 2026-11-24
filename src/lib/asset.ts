/** Prefix a /public file path with the site's base path (GitHub Pages serves the site under /<repo>). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
