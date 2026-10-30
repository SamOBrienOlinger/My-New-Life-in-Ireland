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

  assert.match(html, /<title>Journeys to Ireland<\/title>/);
  assert.match(html, /href="about\/"/);
  assert.match(html, /href="resources\/"/);
  assert.match(html, /href="fact-or-fiction\/"/);
  assert.match(html, /href="search\/"/);
  assert.match(html, /href="resources\/\?topic=work#resource-browser"/);
  assert.match(html, /href="resources\/\?topic=protection#resource-browser"/);
  assert.match(html, /href="resources\/\?topic=study#resource-browser"/);
  assert.match(html, /href="resources\/\?topic=family#resource-browser"/);
  assert.match(html, /href="resources\/\?topic=arrival#resource-browser"/);
  assert.match(html, /href="resources\/\?topic=rights#resource-browser"/);
  assert.equal((html.match(/href="#choose-character"/g) || []).length, 0);
  assert.match(html, /Walk with/);
  assert.match(html, /Postgraduate student/);
  assert.match(html, /Adama Sissoko/);
  assert.match(html, /Elena Petrova/);
  assert.match(html, /Leila Rahman/);
  assert.match(html, /aria-label="Journeys to Ireland: Home"/);
  assert.match(html, /<span>Journeys to Ireland<\/span>/);
  assert.match(html, /is an interactive learning platform\. The goal is to educate everybody to empower everyone\./);
  assert.match(html, /Copyright © 2026\. All rights reserved/);
  assert.match(html, /href="https:\/\/samobrienolinger\.github\.io\/SamOBrienOlinger\/"/);
});

test("renders the About route with launch information", async () => {
  const html = await render("/about");

  assert.match(html, /<title>About \| Journeys to Ireland<\/title>/);
  assert.match(html, /Creator, copyright and ownership/);
  assert.match(html, /twelve fictional characters/);
  assert.match(html, /intersectional barriers/);
  assert.match(html, /does not make the project open source/);
  assert.match(html, /href="https:\/\/samobrienolinger\.github\.io\/SamOBrienOlinger\/"/);
});

test("all four lower homepage sections include readable content and links before hydration", async () => {
  const html = await render("/");
  const sections = [
    ["learning-journal", /<section\b[^>]*id="learning-journal"[^>]*>([\s\S]*?)<\/section>/, /Return to the decisions, ideas and questions you explored\./],
    ["facts", /<section\b[^>]*class="fact-home-teaser"[^>]*>([\s\S]*?)<\/section>/, /href="fact-or-fiction\/"/],
    ["hub", /<section\b[^>]*id="information-hub-topics"[^>]*>([\s\S]*?)<\/section>/, /href="resources\/"/],
    ["guidance", /<section\b[^>]*id="official-guidance"[^>]*>([\s\S]*?)<\/section>/, /href="about\/#source-method"/],
  ];
  for (const [name, pattern, content] of sections) {
    const section = html.match(pattern)?.[0];
    assert.ok(section, "Missing section: " + name);
    assert.match(section, /<h2\b[^>]*>[^<]+<\/h2>/, name + " heading");
    assert.match(section, /<p\b[^>]*>[^<]+<\/p>/, name + " explanation");
    assert.match(section, content, name + " content");
    assert.doesNotMatch(section, /<(?:section|div|h2|p|a)\b[^>]*(?:\shidden(?:\s|=|>)|aria-hidden="true"|style="[^"]*(?:opacity:\s*0(?:;|")|visibility:\s*hidden|display:\s*none))/, name + " must not be hidden before hydration");
  }
  assert.match(html, /Complete a journey to keep your decisions and a reflection here\./);
});

test("renders the Ireland information hub", async () => {
  const html = await render("/resources");

  assert.match(html, /<title>Ireland Information Hub \| Journeys to Ireland<\/title>/);
  assert.match(html, /Find the right source for the next question/);
  assert.match(html, /Registering immigration permission/);
  assert.match(html, /Independent status after domestic abuse/);
  assert.match(html, /is an interactive learning platform\. The goal is to educate everybody to empower everyone\./);
  assert.match(html, /Copyright © 2026\. All rights reserved/);
  assert.match(html, /href="https:\/\/samobrienolinger\.github\.io\/SamOBrienOlinger\/"/);
});


test("renders Fact or Fiction with original sources and independent educational context", async () => {
  const html = await render("/fact-or-fiction");
  assert.match(html, /<title>Fact or Fiction \| Journeys to Ireland<\/title>/);
  assert.match(html, /Fact or Fiction\?/);
  assert.match(html, /check-standard-welfare/);
  assert.match(html, /check-permit-equals-fairness/);
  assert.match(html, /Economic and Social Research Institute/);
  assert.match(html, /Migrant Rights Centre Ireland/);
  assert.match(html, /2026-10-26/);
});

test("renders site-wide Search and its responsive navigation", async () => {
  const html = await render("/search");
  assert.match(html, /<title>Search \| Journeys to Ireland<\/title>/);
  assert.match(html, /Search the entire site/);
  assert.match(html, /id="site-search-query"/);
  assert.match(html, /href="\.\.\/fact-or-fiction\//);
  assert.match(html, /href="\.\.\/resources\//);
});

test("footer navigation and return-to-top are server-rendered on all public pages", async () => {
  for (const pathname of ["/", "/about", "/resources", "/fact-or-fiction", "/search"]) {
    const html = await render(pathname);
    assert.match(html, /class="footer-navigation-section"/, pathname);
    assert.match(html, /class="footer-back-to-top"/, pathname);
    assert.match(html, />Back to the top</, pathname);
    assert.match(html, /class="floating-back-to-top"/, pathname);
    const footerNav = html.match(/<nav class="footer-navigation"[^>]*>[\s\S]*?<\/nav>/);
    assert.ok(footerNav, "Footer navigation missing on " + pathname);
    assert.equal((footerNav[0].match(/class="footer-nav-link"/g) || []).length, 7, pathname);
    for (const label of ["Home", "Journeys", "About", "Information hub", "Fact or Fiction", "Search", "Official guidance"]) {
      assert.ok(footerNav[0].includes(">" + label + "</a>"), pathname + ": " + label);
    }
  }
});
