import { dev } from "$app/environment";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch, params }) => {
  const res = await fetch(`https://dog.ceo/api/breed/${params.id}/images`);
  const item: any = await res.json();

  return {
    item,
  };
};
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
