import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onCreditCardValidityChange(isValid) {
      console.log("Controller:onValidityChange" + isValid);
      this.set('creditCardInfoIsValid',isValid);
    }
  }
});
