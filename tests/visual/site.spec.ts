import { expect, test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const base = "/demo-astro-starlight";

// One page per GraphQL type kind the reference renders differently.
const pages = [
  ["object", "types/objects/project", "Project"],
  ["enum", "types/enums/project-status", "ProjectStatus"],
  ["interface", "types/interfaces/node", "Node"],
  ["union", "types/unions/search-result", "SearchResult"],
  ["input", "types/inputs/create-project-input", "CreateProjectInput"],
  ["scalar", "types/scalars/date-time", "DateTime"],
  ["query", "operations/queries/projects", "projects"],
  ["mutation", "operations/mutations/create-project", "createProject"],
  ["subscription", "operations/subscriptions/project-changed", "projectChanged"],
  ["directive", "types/directives/deprecated", "deprecated"],
] as const;

// Element screenshots are stitched while scrolling, so sticky chrome (site
// header, mobile table of contents, footer) would be painted over the content.
const hideChrome = [
  "header, footer, mobile-starlight-toc, starlight-toc { display: none !important; }",
  "html { scroll-padding-top: 0 !important; }",
].join("\n");

test("home", async ({ page }) => {
  const response = await page.goto(`${base}/`);
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toContainText("Your API, mapped with intent.");
  await argosScreenshot(page, "home");
});

for (const [kind, path, title] of pages) {
  test(`page: ${kind}`, async ({ page }) => {
    const response = await page.goto(`${base}/${path}/`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveText(title);
    await argosScreenshot(page, `page-${kind}`, {
      element: page.locator("main .sl-markdown-content"),
      argosCSS: hideChrome,
    });
  });
}

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("home", async ({ page }) => {
    await page.goto(`${base}/`);
    await argosScreenshot(page, "home-dark");
  });

  test("page: object", async ({ page }) => {
    await page.goto(`${base}/types/objects/project/`);
    await argosScreenshot(page, "page-object-dark", {
      element: page.locator("main .sl-markdown-content"),
      argosCSS: hideChrome,
    });
  });
});
