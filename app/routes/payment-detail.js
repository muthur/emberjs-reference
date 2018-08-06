import Route from '@ember/routing/route';

export default Route.extend({
  setupController: function (controller) {
    controller.set('countries', [
      { abbrev: 'US' },
      { abbrev: 'AUS' },
    ]);
  }
});
