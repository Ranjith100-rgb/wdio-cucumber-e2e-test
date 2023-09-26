import BasePage from "./base.page";
import categoryMenuComponent from "../automation-store/components/category-menu-comp.js";

class HomePage extends BasePage
{
    async open()
    {
         return await super.open("");
    }

    get categoryMenuComponent()
    {
        return categoryMenuComponent;
    }
}

export default new HomePage();