import DS from "ember-data";

//https://github.com/miguelcobain/ember-paper/pull/232
export default DS.Model.extend({
  cardNumber: DS.attr("number"),
  expiryDate: DS.attr("date"),
  cvv: DS.attr("number"),
  nameOnCard: DS.attr("string"),
  zipCode: DS.attr("string"),
  country: DS.attr("string"),
  expirationMonth: DS.attr("number", {
    defaultValue: function() {
      var month = new Date().getMonth() + 1;

      if (month < 13) {
        return month;
      }

      return 1;
    }
  }),
  expirationYear: DS.attr("number", {
    defaultValue: function() {
      var year = new Date().getFullYear();
      var month = new Date().getMonth() + 2;

      if (month < 13) {
        return year;
      }

      return year + 1;
    }
  }),
  token: DS.attr("string", {
    defaultValue: ""
  })
});
