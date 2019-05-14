import loginData from "../data/login";
import sel from "../selectors/helpers";

class Helpers {

  login (){
    browser.url('/');
    $('#email').setValue(loginData.email);
    $('#pass').setValue(loginData.pass);
    $('#login').click();
    let newBug = $('#new_bug');
    newBug.waitForDisplayed(5000);
  }

  isVisible (selector, index){
    if(index === undefined){
      return $(selector).isDisplayed()
    } else {
      return $$(selector)[index].isDisplayed()
    }
  }

  openRegistration(){
      browser.url('/');
      $(sel.buttonRegister).click();
  }

  maxInput(selector, maxLength){
    let input = $(selector);
    input.addValue('W'.repeat(maxLength));
    let actual = input.getValue().length;
    input.clearValue();
    return actual;
  }

  moreMaxInput(selector, maxLength) {
    let input = $(selector);
    input.addValue('W'.repeat(maxLength + 1));
    let actual = input.getValue().length;
    input.clearValue();
    return actual;
  }

}

export default new Helpers()
