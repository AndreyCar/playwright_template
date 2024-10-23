import { expect, test } from '@fixtures/fixtures';

test.describe('Login', () => {
    // test.beforeAll(async () => {});
    // test.beforeEach(async () => {});

    // test.afterEach(async ({}) => {});
    // test.afterAll(async ({}) => {});

    test('should log in with valid credentials', async ({ loginPage, inventoryPage }) => {
        await loginPage.open();
        await loginPage.login({ username: process.env.LOGIN_USERNAME, password: process.env.LOGIN_PASSWORD });
        await expect(inventoryPage.btnExtendSidebarMenu).toBeVisible();
    });
});
