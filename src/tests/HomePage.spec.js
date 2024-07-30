const{test, expect} = require('@playwright/test');
const HomePage = require("../pages/homePage")
const ArticlePage = require("../pages/articlePage")

test('Checking 1News Logo', async({page})=>{
   await page.goto('https://www.1news.co.nz/');
   const homePage= new HomePage(page)
   await homePage.checkOnenewsLogo()

})
test('TC-2211 - Article Page Video source', async({page})=>{
   // await page.goto('https://www.1news-sandbox.co.nz/afnBTUnkErhMqefIPjwdpz/')
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
   // await page.goto('https://www.1news-sandbox.co.nz/afnBTUnkErhMqefIPjwdpz/')
   await page.goto('https://www.1news.co.nz/2024/07/16/thick-fog-which-blanketed-auckland-could-soon-return/')
   const articlePage = new ArticlePage(page)
   const tags = articlePage.checkArticleTags()
   console.log(tags)
   await page.close();

});

