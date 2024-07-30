import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.1news.co.nz/');
  await page.getByRole('navigation').getByRole('button').click();
  await page.locator('ul').filter({ hasText: 'Top StoriesLatestNew' }).getByRole('img').click();
  await page.getByText('CLOSE', { exact: true }).click();
  await page.getByPlaceholder('Email address').nth(1).click();
  await page.getByPlaceholder('Email address').nth(1).fill('test@test.co.nz');
  await page.getByRole('button', { name: 'SIGN UP' }).nth(1).click();
  await page.getByText('Thank you for subscribing.').click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
});