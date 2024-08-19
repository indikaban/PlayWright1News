const{expect} = require('@playwright/test');

    class ArticlePage
    {
        constructor(page)
        {
            this.page = page
            this.videoSource = "//p[@class='text-greyDarkFaded']"
            this.taboolaBlock = "//div[@id='desktop-taboola-below-article-thumbnails']"
            this.articleTags = "//div[@class='default__StyledTagContainer-sc-6d4zw9-0 nCmFm']//a"
            this.socialTags = "(//div[@id='socialListParent'])[1]"
        }

    
    async checkVideoSource()
    {
        const locator = this.page.locator(this.videoSource);
        console.log("Waiting for element:", this.videoSource);
        await expect.soft(locator).toBeVisible({ timeout: 10000 }); // Wait for the element to be visible
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
        const links = await this.page.$$(this.articleTags)
        for(const link of links)
        {
            const linkText = await link.textContent()
            console.log(linkText)
        }
    }

    async checkArticleTagsLinks()
    {
        const links = await this.page.$$(this.articleTags)
        for(const link of links)
        {
            const linkText = await link.getAtribute('href')
            console.log(linkText)
        }
    }

    async checkSocialShareInArticlePage()
    {
        const [socialListParent] = await this.page.$$(this.socialTags);

    if (socialListParent) {
        const childElements = await socialListParent.$$('*');

        for (const child of childElements) {
        const idValue = await child.getAttribute('id');
            if (idValue) {
                console.log(idValue);
             }
        }
        }   else {
            console.log('Parent element not found.');
            }
    }


  
}


module.exports=ArticlePage;