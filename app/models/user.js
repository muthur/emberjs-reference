import DS from 'ember-data';
const {Model,attr} = DS;

export default Model.extend({
  userName: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string')
});
