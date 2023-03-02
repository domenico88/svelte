import { dev } from "$app/environment";
import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
  const res = await fetch(`https://dog.ceo/api/breeds/list/all`);
  const item: any = await res.json();

  const res_african: any = await fetch(
    `https://dog.ceo/api/breed/african/images/random`
  );
  const african: any = await res_african.json();
  const res_airedale: any = await fetch(
    `https://dog.ceo/api/breed/airedale/images/random`
  );
  const airedale: any = await res_airedale.json();
  return {
    african: african.message,
    airedale: airedale.message,
  };
};
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
