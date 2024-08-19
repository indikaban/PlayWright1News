
const{expect} = require('@playwright/test');
exports.HomePage = 
class HomePage
{
    constructor(page)
    {
        this.page = page
        this.onenewslogo = "//img[@alt='1News']"
        this.navigationList = "//div[contains(@class,'navMenu is-at-start')]"

    }

    async goToHomePage()
    {
        await this.page.goto('https://www.1news-sandbox.co.nz/afnBTUnkErhMqefIPjwdpz/')
        await this.page.goto('https://www.1news-sandbox.co.nz/')
    }

    async checkOnenewsLogo()
    {
        await expect(this.page.locator(this.onenewslogo)).toBeVisible()
    } 


    async checkTopNvigation()

    {
        const [navigationListParent] = await this.page.$$(this.navigationList);

    if (navigationListParent) {
        const childElements = await navigationListParent.$$('*');

        for (const child of childElements) {
        const idValue = await child.getAttribute('href');
            if (idValue) {
                console.log(idValue);
             }
        }
        }   else {
            console.log('Parent element not found.');
            }
    }
   
}
