import { test, expect } from '@playwright/test';
import LoginPage from '../lib/pageObject/login-page';
import { users } from '../fixtures/login-credential';

test('login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
});

test('login with empty username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login(users.emptyUser.username, users.emptyUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
});

test('login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login(users.emptyPassword.username, users.emptyPassword.password);
    await expect(loginPage.errorMessage).toBeVisible();
});

test('login with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login(users.emptyUsername.username, users.emptyUsername.password);
    await expect(loginPage.errorMessage).toBeVisible();
});
