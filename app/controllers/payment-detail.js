import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    onCreditCardValidityChange(isValid) {
      /* eslint-disable */
      console.log("Controller:onValidityChange" + isValid);
      /* eslint-enable */
      this.set("creditCardInfoIsValid", isValid);
    }
  }
});
