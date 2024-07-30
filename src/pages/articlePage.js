const{expect} = require('@playwright/test');

    class ArticlePage
    {
        constructor(page)
        {
            this.page = page
            this.videoSource = "//p[@class='text-greyDarkFaded']"
            this.taboolaBlock = "//div[@id='desktop-taboola-below-article-thumbnails']"
            this.articleTags = "//div[@class='default__StyledTagContainer-sc-6d4zw9-0 nCmFm']/a"
        }

    
    async checkVideoSource()
    {
        const locator = this.page.locator(this.videoSource);
        console.log("Waiting for element:", this.videoSource);
        await expect(locator).toBeVisible({ timeout: 10000 }); // Wait for the element to be visible
        console.log("Element found. Checking text...");
        await expect(locator).toContainText('Source', { timeout: 10000 });
        console.log("Text matched.");
    }

    async checkTaboolaBlock()
    {
        const locator = this.page.locator(this.taboolaBlock)
        await expect(locator).toBeVisible({timeout: 10000})
    }

    async checkArticleTags()
    {
        const locator = this.page.locator(this.articleTags)
        const textArray = [];
        locator.forEach(el => {
            textArray.push(el.textContent.trim());
        });
        return textArray;
    }
}
module.exports=ArticlePage;