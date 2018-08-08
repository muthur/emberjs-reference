import Component from '@ember/component';

const _startWith = (str, length, min, max) => {
    if (str.length < length) {
        return false;
    }

    const v = parseInt(str.substring(0, length));

    return v >= min && v <= max;
};

export default Component.extend({
    countries: null,
    init() {
        this._super(...arguments);
        this.countries = [
            { abbrev: 'US' },
            { abbrev: 'AUS' },
        ];
    },

    cardNumberValidation: [{
        message: 'Invalid card number',
        validate: (inputValue) => {
            let cardNumber = inputValue.toString();
            if (cardNumber.startsWith('4')) {
                return cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19; //Visa
            } else if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
                return cardNumber.length === 15; //American Express
            } else if (cardNumber.startsWith('6011') || cardNumber.startsWith('65')) {
                return cardNumber.length >= 16 && cardNumber.length <= 19; //Discover
            } else if (_startWith(cardNumber, 3, 644, 649)) {
                return cardNumber.length >= 16 && cardNumber.length <= 19; //Discover
            } else if (_startWith(cardNumber, 6, 622126, 622925)) {
                return cardNumber.length >= 16 && cardNumber.length <= 19; //Discover
            } else if (_startWith(cardNumber, 2, 51, 55) || _startWith(cardNumber, 6, 222100, 272099)) {
                return cardNumber.length === 16 || cardNumber.length === 19; //Mastercard
            }
            return false;
        }
    }]
});
