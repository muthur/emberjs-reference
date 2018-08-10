//TODO: get rid of this method. For now its just a temporary port
const _startWith = (str, length, min, max) => {
  if (str.length < length) {
    return false;
  }
  const v = parseInt(str.substring(0, length));

  return v >= min && v <= max;
};

//This function is extracted from npm package named "luhn"
function validateLuhn(cardNumber) {
  var trimmed = String(cardNumber).replace(/[\s]/g, ""),
    length = trimmed.length,
    odd = false,
    total = 0,
    calc,
    calc2;

  if (length === 0) {
    return true;
  }

  if (!/^[0-9]+$/.test(trimmed)) {
    return false;
  }

  for (var i = length; i > 0; i--) {
    calc = parseInt(trimmed.charAt(i - 1));
    if (!odd) {
      total += calc;
    } else {
      calc2 = calc * 2;

      switch (calc2) {
        case 10:
          calc2 = 1;
          break;
        case 12:
          calc2 = 3;
          break;
        case 14:
          calc2 = 5;
          break;
        case 16:
          calc2 = 7;
          break;
        case 18:
          calc2 = 9;
          break;
        default:
          calc2 = calc2; //eslint-disable-line
      }
      total += calc2;
    }
    odd = !odd;
  }

  return total !== 0 && total % 10 === 0;
}

function isValidNumber(cardNumber) {
  if (cardNumber.startsWith("4")) {
    return (
      cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19
    ); //Visa
  } else if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    return cardNumber.length === 15; //American Express
  } else if (cardNumber.startsWith("6011") || cardNumber.startsWith("65")) {
    return cardNumber.length >= 16 && cardNumber.length <= 19; //Discover
  } else if (_startWith(cardNumber, 3, 644, 649)) {
    return cardNumber.length >= 16 && cardNumber.length <= 19; //Discover
  } else if (_startWith(cardNumber, 6, 622126, 622925)) {
    return cardNumber.length >= 16 && cardNumber.length <= 19; //Discover
  } else if (
    _startWith(cardNumber, 2, 51, 55) ||
    _startWith(cardNumber, 6, 222100, 272099)
  ) {
    return cardNumber.length === 16 || cardNumber.length === 19; //Mastercard
  }
  return false;
}

function isValidExpirationDate(month, year) {
  if (typeof month === "string") {
    month = parseInt(month);
  }

  if (typeof year === "string") {
    year = parseInt(year);
  }

  if (typeof month !== "number") {
    return false;
  }

  if (typeof year !== "number") {
    return false;
  }

  if (month > 12) {
    return false;
  }

  var edate = new Date(year, month);
  var today = new Date();

  //Months start from 0 in JavaScript
  edate.setMonth(edate.getMonth() - 1);

  // The cc expires at the end of the month,
  // so we need to make the expiry the first day
  //  of the month after
  edate.setMonth(edate.getMonth() + 1, 1);

  return edate > today;
}

function isValidCVV(cvv, cardType) {
  if (cvv.length === 0) {
    return false;
  } else if (cvv.length > 0) {
    if (cardType === "visa" || cardType === "mastercard") {
      if (cvv.length !== 3) {
        return false;
      }
    } else if (cardType === "amex") {
      if (cvv.length !== 4) {
        return false;
      }
    } else if (cardType === "discover") {
      if (cvv.length !== 3) {
        return false;
      }
    }
    return true;
  }
}

//function isValidPostalCode(postalCode) {}

export default {
  isValidNumber: isValidNumber,
  isValidExpirationDate: isValidExpirationDate,
  isValidCVV: isValidCVV,
  validateLuhn: validateLuhn
  //isValidPostalCode: isValidPostalCode
};
