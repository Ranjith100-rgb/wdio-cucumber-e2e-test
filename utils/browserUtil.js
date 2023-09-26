module.exports = {
  waitThenClick: async function (element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();
  },

};
