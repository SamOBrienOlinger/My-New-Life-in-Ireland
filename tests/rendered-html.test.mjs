import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  return response.text();
}

test("renders the public experience with ownership and About links", async () => {
  const html = await render("/");

  assert.match(html, /<title>My New Life in Ireland<\/title>/);
  assert.match(html, /href="about\/"/);
  assert.match(html, /href="resources\/"/);
  assert.match(html, /Walk with/);
  assert.match(html, /Postgraduate student/);
  assert.match(html, /Adama Sissoko/);
  assert.match(html, /Elena Petrova/);
  assert.match(html, /Leila Rahman/);
  assert.match(html, /<strong>40<\/strong> decisions/);
  assert.match(html, /Copyright © 2026 Sam O(?:&#x27;|')Brien-Olinger/);
});

test("renders the About route with launch information", async () => {
  const html = await render("/about");

  assert.match(html, /<title>About \| My New Life in Ireland<\/title>/);
  assert.match(html, /Creator, copyright and ownership/);
  assert.match(html, /twelve fictional characters/);
  assert.match(html, /intersectional barriers/);
  assert.match(html, /does not make the project open source/);
});

test("renders the Ireland information hub", async () => {
  const html = await render("/resources");

  assert.match(html, /<title>Ireland Information Hub \| My New Life in Ireland<\/title>/);
  assert.match(html, /Find the right source for the next question/);
  assert.match(html, /Registering immigration permission/);
  assert.match(html, /Independent status after domestic abuse/);
  assert.match(html, /Copyright © 2026 Sam O(?:&#x27;|')Brien-Olinger/);
});
