import { test, expect } from '@playwright/test';

test('Drag slider to 95 without boundingBox', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.click('text=Drag & Drop Sliders');

    // Target the slider with default value 15
    const slider = page.locator('#slider3 input[type="range"]');
    const output = page.locator('#rangeSuccess');

    // Focus the slider
    await slider.focus();

    // Use keyboard to move the slider to 95
    // Each ArrowRight increases the value by 1
    for (let i = 0; i < 80; i++) {
        await page.keyboard.press('ArrowRight');
    }

    // Validate the slider value is 95
    await expect(output).toHaveText('95');
});
