# playwright-typescript

# command to initialise project npm init playwright@latest Chromium, firefox and webkit browsers are installed on mac at ~/Library/Caches/ms-playwright/ upon initialisation
npx playwright test Runs the end-to-end tests.

npx playwright test --ui Starts the interactive UI mode.

npx playwright test --project=chromium Runs the tests only on Desktop Chrome.

npx playwright test example Runs the tests in a specific file.

npx playwright test --debug Runs the tests in debug mode.

npx playwright codegen Auto generate tests with Codegen.

# get started - Husky
https://typicode.github.io/husky/getting-started.html

# husky - command to add pre-commit script
npx husky set .husky/pre-commit "npm run lint && npm run lint:fix"