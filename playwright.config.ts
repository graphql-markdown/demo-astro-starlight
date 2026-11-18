import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.VISUAL_PORT ?? 4173);

// Stabilize font rendering across machines (recommended by Argos).
const launchOptions = {
  args: ["--disable-lcd-text", "--font-render-hinting=none"],
};

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    [process.env.CI ? "dot" : "list"],
    [
      "@argos-ci/playwright/reporter",
      { uploadToArgos: !!process.env.CI && !!process.env.ARGOS_TOKEN },
    ],
  ],
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], launchOptions } },
    { name: "mobile", use: { ...devices["Pixel 7"], launchOptions } },
  ],
  webServer: {
    // Static output of `npm run build`. The site base is `/demo-astro-starlight`,
    // so `dist/` is exposed under that path through a symlink and served by `serve`.
    // (`astro preview` daemonizes in agent shells, which breaks webServer.)
    command: `mkdir -p .serve && ln -sfn ../dist .serve/demo-astro-starlight && npx serve --symlinks -l ${port} .serve`,
    url: `http://localhost:${port}/demo-astro-starlight/`,
    reuseExistingServer: !process.env.CI,
    env: { NO_UPDATE_CHECK: "1" },
      },
});
