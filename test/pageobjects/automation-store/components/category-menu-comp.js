class CatergoryMenuComponents {
  categoryMenuLink(linkedText) {
    return $$('//a[contains(text(),"' + linkedText + '")]');
  }
}

export default new CatergoryMenuComponents();
