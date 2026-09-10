/**
 * Portal static assets live under `public/rhine/` so they never collide with
 * the resume app's own public files. Both the dev server and the production
 * build serve them from the `/rhine/` URL prefix as-is.
 */
export const assetUrl = (path: string) => `/rhine/${path.replace(/^\//, "")}`;
