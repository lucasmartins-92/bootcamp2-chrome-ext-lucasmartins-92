import { defineConfig, devices } from "@playwright/test";
import path from "node:path";

const dist = path.join(__dirname, "dist");

export default defineConfig({
  testDir: __dirname,
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        headless: false,
        launchOptions: {
          args: [
            `--disable-extensions-except=${dist}`,
            `--load-extension=${dist}`,
          ],
        },
      },
    },
  ],
});
