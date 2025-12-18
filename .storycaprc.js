/** @format */

module.exports = {
  serverOptions: {
    command: "npm run storybook",
    port: 6006,
    protocol: "http",
    launchTimeout: 120000,
    debug: false,
    serverUrl: "http://localhost:6006",
  },
  screenshotOptions: {
    fullPage: false,
    clip: null,
    omitBackground: false,
  },
  capture: [
    {
      stories: ({ kind, story }) => {
        // Capture all stories
        return true;
      },
    },
  ],
  outputDir: "./screenshots",
  parallel: 1,
  delay: 2000,
  viewport: {
    width: 1280,
    height: 720,
  },
  include: ["**/*.stories.@(js|jsx|ts|tsx)"],
};
