import BasePage from "./base.page";
import DataGenerator from "../../../utils/data-generator.js";

class ContactUsPage extends BasePage
{
    async open()
    {
        return await super.open('/Contact-Us/contactus.html')
    }

    get firstNameTextfield()
    {
        return  $("[name='first_name']");
    }

    get lastNameTextfield()
    {
        return $('[name="last_name"]');
    }

    get emailAddressTextfield()
    {
        return $('[name="email"]');
    }

    get textArea()
    {
        return $('[name="message"]');
    }

    get submitButton()
    {
        return $('//*[@value="SUBMIT"]');
    }

    get successfullSubmission()
    {
        return $('#contact_reply > h1');
    }

    get unSuccessfullSubmission()
    {
        return $('body');
    }

    async enterTheField(firstname,lastname,email,text)
    {
        await this.firstNameTextfield.setValue(firstname);
        await this.lastNameTextfield.setValue(lastname);
        await this.emailAddressTextfield.setValue(email);
        await this.textArea.setValue(text);
        await browser.waitThenClick(this.submitButton);
    }

    async enterTheFieldWithRandom(firstname,lastname)
    {
        await this.firstNameTextfield.setValue(firstname);
        await this.lastNameTextfield.setValue(lastname);
        await this.emailAddressTextfield.setValue(DataGenerator.generateRandomString()+"@gmail.com");
        await this.textArea.setValue(DataGenerator.generateRandomString());
        await browser.waitThenClick(this.submitButton);
    }
}

export default new ContactUsPage();