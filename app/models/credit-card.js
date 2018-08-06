import DS from "ember-data";

//https://github.com/miguelcobain/ember-paper/pull/232
export default DS.Model.extend({
  cardNumber: DS.attr("number"),
  expiryDate: DS.attr("date"),
  cvv: DS.attr("number"),
  nameOnCard: DS.attr("string"),
  zipCode: DS.attr("string"),
  country: DS.attr("string")
});
