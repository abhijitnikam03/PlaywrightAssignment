// Scenario.js
import { test, expect } from '@playwright/test';

test('LambdaTest Simple Form Demo', async ({ page }) => {
    // Step 1: Open LambdaTest Selenium Playground
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Step 2: Click "Simple Form Demo"
    await page.locator('text=Simple Form Demo').click();

    // Step 3: Validate the URL contains "simple-form-demo"
    await expect(page).toHaveURL(/simple-form-demo/);

    // Step 4: Create a variable for a string
    const message = "Welcome to LambdaTest";

    // Step 5: Enter this variable in the "Enter Message" text box
    await page.fill('input[id="user-message"]', message);

    // Step 6: Click "Get Checked Value" button
    await page.click('button:has-text("Get Checked Value")');

    // Step 7: Validate the message displayed under "Your Message:"
    const displayedMessage = await page.textContent('#message');
    expect(displayedMessage.trim()).toBe(message);
});
