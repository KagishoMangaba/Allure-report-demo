import {test , expect} from '@playwright/test';

test('has title' , async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')


    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator("//span[.='User']").click();
    await page.locator("select.form-control").selectOption("Consultant")
    await page.locator('#terms').check();
    await page.locator('#signInBtn').click();








});