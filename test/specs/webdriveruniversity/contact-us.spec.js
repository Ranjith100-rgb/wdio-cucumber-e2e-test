import contactUsPage from "../../pageobjects/webdriver-university/contact-us.page";


describe("WebdriverUniversity-contact us page", () => {
  beforeEach(async () => {
    await contactUsPage.open();
  });

  it.only("valid submission-submit all information", async () => {
    await contactUsPage.enterTheFieldWithRandom("Ranjith", "B");
    expect(await contactUsPage.successfullSubmission.getText()).toEqual(
      "Thank You for your Message!"
    );
    console.log('execution has been completed successfully');
  });

  it("invalid submission-don't submit all information", async () => {

    await contactUsPage.enterTheFieldWithRandom("Kashif", "Baig");

    await expect(contactUsPage.unSuccessfullSubmission).toHaveTextContaining(['Error: all fields are required', 'Error: Invalid email address']);
    console.log('execution has been completed successfully');
  });
});
