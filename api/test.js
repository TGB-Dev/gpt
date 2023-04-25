/**
 * @param {Request} req
 */
export default function handler(req) {
  return new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
}
