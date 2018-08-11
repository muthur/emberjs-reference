import Component from "@ember/component";
import creditCardValidator from "../../validators/credit-card";

export default Component.extend({
  countries: null,
  init() {
    this._super(...arguments);
    this.countries = [{ abbrev: "US" }, { abbrev: "AUS" }];
    this.cardNumberValidations = [
      {
        message: "Invalid card number",
        validate: cardNumber => {
          return (
            creditCardValidator.validateLuhn(cardNumber) &&
            creditCardValidator.isValidNumber(cardNumber.toString())
          );
        }
      }
    ];
    this.cvvValidations = [
      {
        message: "Invalid CVV number provided",
        validate: cvvNumber => {
          return cvvNumber > 200;
        }
      }
    ];
  },

  actions: {
    onValidityChange(isValid, isTouched, isInvalidAndTouched) {
      /*eslint-disable */
      console.log("insideCC:isValid=" + isValid);
      this.sendAction(
        "onValidityChange",
        isValid,
        isTouched,
        isInvalidAndTouched
      );
      /*eslint-enable */
    },
    onCreditCardNumberChange(obj) {
      console.log(obj);
    }
  }

  //https://github.com/arenoir/ember-credit-cards/tree/master/addon/utils CC helper utils
});
