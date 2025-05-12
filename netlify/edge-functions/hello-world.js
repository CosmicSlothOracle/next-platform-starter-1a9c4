export default async (request, context) => {
  return new Response("Hello from the Edge!", {
    headers: { "content-type": "text/plain" },
  });
};