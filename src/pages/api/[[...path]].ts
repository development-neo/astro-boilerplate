import type { APIRoute } from "astro";

const API_URL = import.meta.env.PUBLIC_API_URL || "https://example.com/api";

export const prerender = false;

const handler: APIRoute = async ({ params, request }) => {
  if (!params?.path || params.path.length === 0) {
    return new Response("Not Found", { status: 404 });
  }

  const path = Array.isArray(params.path) ? params.path.join("/") : params.path;
  const targetUrl = new URL(`${API_URL}/${path}`);

  const requestUrl = new URL(request.url);
  targetUrl.search = requestUrl.search;

  const headers = new Headers();
  for (const [key, value] of request.headers.entries()) {
    if (!["host", "origin", "referer"].includes(key.toLowerCase())) {
      headers.set(key, value);
    }
  }

  const response = await fetch(targetUrl.toString(), {
    method: request.method,
    headers,
    body: request.body,
  });

  const newResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });

  // CORS Forwarder
  if (response.headers.has("access-control-allow-origin")) {
    newResponse.headers.set(
      "access-control-allow-origin",
      response.headers.get("access-control-allow-origin")!
    );
  }
  if (response.headers.has("access-control-allow-methods")) {
    newResponse.headers.set(
      "access-control-allow-methods",
      response.headers.get("access-control-allow-methods")!
    );
  }
  if (response.headers.has("access-control-allow-headers")) {
    newResponse.headers.set(
      "access-control-allow-headers",
      response.headers.get("access-control-allow-headers")!
    );
  }

  return newResponse;
};

export {
    handler as DELETE,
    handler as GET,
    handler as HEAD,
    handler as OPTIONS,
    handler as PATCH,
    handler as POST,
    handler as PUT
};

