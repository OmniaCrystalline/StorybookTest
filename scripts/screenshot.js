/** @format */

import { chromium } from "playwright";
import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

const STORYBOOK_URL = "http://localhost:6006";
const OUTPUT_DIR = "./screenshots";

// Stories to capture
const stories = [
  { path: "components-input--text", name: "Input-Text" },
  {
    path: "components-input--text-with-clearable",
    name: "Input-TextWithClearable",
  },
  { path: "components-input--password", name: "Input-Password" },
  {
    path: "components-input--password-with-clearable",
    name: "Input-PasswordWithClearable",
  },
  { path: "components-input--number", name: "Input-Number" },
  {
    path: "components-input--number-with-clearable",
    name: "Input-NumberWithClearable",
  },
  { path: "components-input--with-label", name: "Input-WithLabel" },
  { path: "components-input--with-error", name: "Input-WithError" },
  { path: "components-input--disabled", name: "Input-Disabled" },
  { path: "components-toast--success", name: "Toast-Success" },
  { path: "components-toast--error-toast", name: "Toast-Error" },
  { path: "components-toast--warning", name: "Toast-Warning" },
  { path: "components-toast--info", name: "Toast-Info" },
  {
    path: "components-toast--with-close-button",
    name: "Toast-WithCloseButton",
  },
  { path: "components-toast--long-duration", name: "Toast-LongDuration" },
  { path: "components-toast--no-auto-dismiss", name: "Toast-NoAutoDismiss" },
  { path: "components-toast--top-left-position", name: "Toast-TopLeft" },
  { path: "components-toast--top-right-position", name: "Toast-TopRight" },
  { path: "components-toast--bottom-left-position", name: "Toast-BottomLeft" },
  { path: "components-sidebar-menu--default", name: "SidebarMenu-Default" },
  { path: "components-sidebar-menu--closed-state", name: "SidebarMenu-Closed" },
  {
    path: "components-sidebar-menu--with-selected",
    name: "SidebarMenu-WithSelected",
  },
  {
    path: "components-sidebar-menu--with-nested-menu",
    name: "SidebarMenu-WithNested",
  },
];

async function createScreenshots() {
  // Create output directory
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();

  console.log(`Connecting to Storybook at ${STORYBOOK_URL}...`);

  // Wait for Storybook to be ready
  try {
    await page.goto(STORYBOOK_URL, {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    console.log("Storybook is ready!");
  } catch (error) {
    console.error(
      "Failed to connect to Storybook. Make sure it is running on port 6006."
    );
    console.error("Run: npm run storybook");
    await browser.close();
    process.exit(1);
  }

  // Wait a bit for Storybook to fully load
  await page.waitForTimeout(2000);

  for (const story of stories) {
    try {
      const storyUrl = `${STORYBOOK_URL}/?path=/story/${story.path}`;
      console.log(`Capturing: ${story.name}...`);

      await page.goto(storyUrl, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(2000); // Wait for animations and content to load

      const screenshotPath = join(OUTPUT_DIR, `${story.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
      });

      console.log(`✓ Saved: ${screenshotPath}`);
    } catch (error) {
      console.error(`✗ Failed to capture ${story.name}:`, error.message);
    }
  }

  await browser.close();
  console.log("\n✅ All screenshots created!");
}

createScreenshots().catch(console.error);
