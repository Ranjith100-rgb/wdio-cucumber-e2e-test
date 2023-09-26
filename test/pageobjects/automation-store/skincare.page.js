import BasePage from "./base.page";
import ItemComponent from "../automation-store/components/item.comp.js";

class SkinCare extends BasePage {
  get itemComponents() {
    return ItemComponent;
  }

  async addSpecificItemValidateTotal() {
    const skinCareProductHeader = await ItemComponent.itemHeaderLink;
    const itemPrices = [];
    for (const header of skinCareProductHeader) {
      const tempHeaderText = await header.getText();
      if (
        tempHeaderText.toLowerCase() == "creme precieuse nuit 50ml" ||
        tempHeaderText.toLowerCase() == "total moisture facial cream"
      ) {
        const att = await header.getAttribute("href");
        const itemID = att.split("id=").pop();
        await $('//a[@data-id="' + itemID + '"]').click();
        itemPrices.push(
          await $(
            '//a[@data-id="' +
              itemID +
              '"]/following-sibling::div/div[@class="pricenew"]' +
              ' | //a[@data-id="' +
              itemID +
              '"]/following-sibling::div/div[@class="oneprice"]'
          ).getText()
        );
      }

      const formattedItemPrices = [];

      itemPrices.forEach((price) => {
        formattedItemPrices.push(price.replace("$", ""));
      });
      var itemsTotal = 0;
      formattedItemPrices.forEach((price) => (itemsTotal += parseFloat(price)));
      console.log(itemsTotal);
    }
    await $('//span[text()="Cart"]').click();

    var shippingCharge = await $(
      '//span[text()="Flat Shipping Rate:"]/../following-sibling::td/span'
    ).getText();
    shippingCharge = shippingCharge.replace("$", "");

    var totalPrice = itemsTotal + parseFloat(shippingCharge);
    console.log(totalPrice);

    const cartPrice = await $(
      '//span[text()="Total:"]/../following-sibling::td/span'
    ).getText();
    const cartTotal = cartPrice.replace("$", "");

    await expect(await parseFloat(cartTotal)).toEqual(totalPrice);
    console.log("execution has been completed");
  }
}

export default new SkinCare();
