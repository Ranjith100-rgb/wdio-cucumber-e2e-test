import HomePage from "../../pageobjects/automation-store/home.page";
import skincarePage from "../../pageobjects/automation-store/skincare.page";

describe("add item to basket", () => {
  beforeEach(async () => {
     HomePage.open();
  });

  it("add specific 'skincare product'", async () => {

    await HomePage.categoryMenuComponent.categoryMenuLink('Skincare')[1].click();
    await skincarePage.addSpecificItemValidateTotal();
  });
});
