export default class BasePage {
  async open(path) {
    return await browser.url(`https://automationteststore.com/${path}`);
  }
}

