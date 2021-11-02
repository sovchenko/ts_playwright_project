// import { BasePage } from "../../ui/pages/BasePage";
const { BasePage } = require('/Users/serhii_ovchenko/Documents/projects/ts_course/automation_intensive_group2/app/ui/pages/BasePage.ts')

it('should work', async () => {

    const homePage = new BasePage();
    await homePage.openHomePage();
});
