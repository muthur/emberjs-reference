import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  // userName(i) {
  //   return `userName${i + 1}`;
  // },
  // firstName(i) {
  //   return `firstName${i + 1}`;
  // },
  // lastName(i) {
  //   return `lastName${i + 1}`;
  // },
  userName: faker.name.firstName,
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  email: faker.internet.email()
});
