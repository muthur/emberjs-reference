import Component from "@ember/component";
import creditCardValidator from "../../validators/credit-card";

export default Component.extend({
  countries: null,
  init() {
    this._super(...arguments);
    this.countries = [{ abbrev: "US" }, { abbrev: "AUS" }];
    this.set('cardNumberValidation', [{
      message: "Invalid card number",
      validate: cardNumber => {
        return (
          creditCardValidator.validateLuhn(cardNumber) &&
          creditCardValidator.isValidNumber(cardNumber.toString())
        );
      }
    }]);
    this.set('cvvValidations', [{
      message: "Invalid CVV number provided",
      validate: cvvNumber => {
        // eslint-disable-next-line no-console
        console.log('cvv : ' + cvvNumber);
        return cvvNumber > 200;
      }
    }]);
    this.set('expirationDateValidations', [{
      message: "Invalid Expiration Date provided",
      validate: expirationDate => {
        // eslint-disable-next-line no-console
        console.log('expirationDate : ' + expirationDate);
        return expirationDate === '092020';
      }
    }]);
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
    },
    onCreditCardFieldChange(id, value) {
      this.set(id, value);
      console.log('onCreditCardFieldChange: id=' + id + ', value=' + value);
    },
  }

  //https://github.com/arenoir/ember-credit-cards/tree/master/addon/utils CC helper utils
});
