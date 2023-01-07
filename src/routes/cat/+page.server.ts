// https://cataas.com/cat?json=true

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(`https://cataas.com/cat?json=true`);
  return await res.json();
}
