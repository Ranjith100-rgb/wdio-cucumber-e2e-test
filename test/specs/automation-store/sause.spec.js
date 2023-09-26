import chai from "chai";

describe("add item to cart", () => {
  it("select the second higest price and add to cart", async () => {
    //login to application
    await browser.url("https://www.saucedemo.com/v1/");
    const usernameTextfield = await $(`[name=user-name]`);
    const passwordTextfield = await $(`[name=password]`);
    const loginButton = await $("#login-button");
    await usernameTextfield.setValue("standard_user");
    await passwordTextfield.setValue("secret_sauce");
    await loginButton.click();
    const actualHomePageURL = await browser.getUrl();

    //Home page has been verified
    chai
      .expect(actualHomePageURL)
      .to.equal("https://www.saucedemo.com/v1/inventory.html");

    //select the item to the cart
    const productHeader = await $$('//div[@class="inventory_item_name"]/..');
    const itemPrices = [];

    for (const header of productHeader) {
      const tempHeaderText = await header.getText();
      if (
        tempHeaderText.toLowerCase() == "sauce labs backpack" ||
        tempHeaderText.toLowerCase() == "sauce labs fleece jacket"
      ) {
        const att = await header.getAttribute("href");
        const itemID = att.split("id=").pop();
        await $(
          '//a[contains(@id,"' +
            itemID +
            '")]/parent::div/following-sibling::div[2]/button'
        ).click();
        await browser.pause(3000);
        itemPrices.push(
          await $(
            '//a[contains(@id,"' +
              itemID +
              '")]/parent::div/following-sibling::div[2]/div'
          ).getText()
        );
      }
    }
    const formattedItemPrices = [];

    itemPrices.forEach((price) => {
      formattedItemPrices.push(price.replace("$", ""));
    });

    var itemsTotal = 0;
    formattedItemPrices.forEach((price) => (itemsTotal += parseFloat(price)));
    console.log(itemsTotal);
    const AddToCartIcon = await $(
      "//*[local-name()='svg' and @data-icon='shopping-cart']"
    );
    await AddToCartIcon.click();
    const actualCheckoutURL = await browser.getUrl();
    chai
      .expect(actualCheckoutURL)
      .to.equal("https://www.saucedemo.com/v1/cart.html");

    //verify the price of added item with the total price
    const Checkout = [];
    const checkoutPrice = await $$("//div[@class='item_pricebar']/div");
    for (const price of checkoutPrice) {
      Checkout.push(await price.getText());
    }

    const formattedItemPricesDuringCheckOut = [];
    Checkout.forEach((price) => {
      formattedItemPricesDuringCheckOut.push(price.replace("$", ""));
    });

    let checkoutTotal = 0;
    formattedItemPricesDuringCheckOut.forEach(
      (price) => (checkoutTotal += parseFloat(price))
    );
    console.log("The item total is " + itemsTotal);
    console.log("The checkout total is " + checkoutTotal);

    chai.expect(itemsTotal).to.equal(checkoutTotal);
    console.log("TestScript has been executed successfully");
  });
});
