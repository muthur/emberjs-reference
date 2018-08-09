import Component from "@ember/component";
import creditCardValidator from "../../validators/credit-card";

export default Component.extend({
  countries: null,
  init() {
    this._super(...arguments);
    this.countries = [{ abbrev: "US" }, { abbrev: "AUS" }];
    //TODO: Move the validation methods to a seperate mixin
    this.cardNumberValidation = [
      {
        message: "Invalid card number",
        validate: cardNumber => {
          return creditCardValidator.isValidNumber(cardNumber.toString());
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
    }
  }

  //https://github.com/arenoir/ember-credit-cards/tree/master/addon/utils CC helper utils
});
