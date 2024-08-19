
import{test, expect} from '@playwright/test'
import {HomePage} from '../pages/homePage'
import {ArticlePage} from '../pages/articlePage'

test('Checking 1News Logo', async({page})=>{
   const homePage= new HomePage(page)
   await homePage.goToHomePage()
   await homePage.checkOnenewsLogo()
   await page.close();
})

test('TC-2211 - Article Page Video source', async({page})=>{
   await page.goto('https://www.1news.co.nz/2024/07/16/thick-fog-which-blanketed-auckland-could-soon-return/')
   const articlePage = new ArticlePage(page)
   await articlePage.checkVideoSource()
   await page.close();

})


test('TC-1371 - Article Taboola block', async({page})=>{
   // await page.goto('https://www.1news-sandbox.co.nz/afnBTUnkErhMqefIPjwdpz/')
   await page.goto('https://www.1news.co.nz/2024/07/16/thick-fog-which-blanketed-auckland-could-soon-return/')
   const articlePage = new ArticlePage(page)
   await articlePage.checkTaboolaBlock()
   await page.close();

})

test('TC-1368 - Verify article tags', async({page})=>{
  
   await page.goto('https://www.1news.co.nz/2024/07/16/thick-fog-which-blanketed-auckland-could-soon-return/')
   const articlePage = new ArticlePage(page)
   await articlePage.checkArticleTags()
  // await articlePage.checkArticleTagsLinks()
   await page.close();

})

test('TC-453 - Verify Social sharing in article page', async({page})=>{
  
   await page.goto('https://www.1news.co.nz/2024/07/16/thick-fog-which-blanketed-auckland-could-soon-return/')
   const articlePage = new ArticlePage(page)
   await articlePage.checkSocialShareInArticlePage()
   await page.close();

});


test('TC-2242 - Verify 1News page titles', async({page})=>{
  
   await page.goto('https://www.1news.co.nz/')
   await expect(page).toHaveTitle('1News')

   await page.goto('https://www.1news.co.nz/new-zealand/')
   await expect(page).toHaveTitle('New Zealand')

   await page.goto('https://www.1news.co.nz/2024/08/11/person-dies-after-ice-skating-incident-in-mid-canterbury/')
   await expect(page).toHaveTitle('Person dies at Canterbury ice skating rink')

   await page.close();


})

test('Checking top navigation links', async({page})=>{
   await page.goto('https://www.1news.co.nz/');
   const homePage= new HomePage(page)
   await homePage.checkTopNvigation()
   await page.close();

})

test('Search', async ({ page }) => {
   await page.goto('https://www.1news.co.nz/');
   await page.locator('#fusion-app label').getByRole('img').click();
   await page.getByPlaceholder('Search 1 NEWS...').fill('weather');
   const page1Promise = page.waitForEvent('popup');
   await page.getByRole('link', { name: 'Warning issued as wet and windy weather bears down on NZ' }).click();
   const page1 = await page1Promise;
   await page.close();
 })


 test('test', async ({ page }) => {
   await page.goto('https://www.1news.co.nz/2024/08/16/warning-issued-as-wet-and-windy-weather-bears-down-on-nz/');
   await page.getByText('Source');
   await page.close();
 });