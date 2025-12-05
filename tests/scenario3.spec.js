import { test, expect } from '@playwright/test';

test('Validate Input Form Submit functionality', async ({ page }) => {
    // Step 1: Open the playground and navigate to Input Form Submit
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.click('text=Input Form Submit');

    // Step 2: Click Submit without filling anything
    await page.click('(//button[@type="submit"])[2]');

    // Step 3: Assert browser validation message
    const nameInput = page.locator('input[name="name"]');
    const validationMessage = await nameInput.evaluate(el => el.validationMessage);
    expect(validationMessage).toContain('Please fill out this field.');

    // Step 4: Fill in all required fields
    await page.fill('input[name="name"]', 'Abhijit');
    await page.fill('(//input[@name="email"])[2]', 'abhijit@example.com');
    await page.fill('input[name="password"]', 'SecurePass123');
    await page.fill('input[name="company"]', 'TestCorp');
    await page.fill('input[name="website"]', 'https://testcorp.com');
    await page.selectOption('select[name="country"]', { label: 'United States' });
    await page.fill('input[name="city"]', 'Surat');
    await page.fill('input[name="address_line1"]', '123 Main Street');
    await page.fill('input[name="address_line2"]', 'Suite 456');
    await page.fill('input[id="inputState"]', 'Gujarat');
    await page.fill('input[name="zip"]', '395007');

    // Step 5: Submit the form
    await page.click('(//button[@type="submit"])[2]');

    // Step 6: Validate success message
    await expect(page.locator('.success-msg')).toHaveText(
        'Thanks for contacting us, we will get back to you shortly.'
    );
});
