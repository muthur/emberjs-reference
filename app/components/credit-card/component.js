import Component from '@ember/component';

export default Component.extend({
    countries: null,
    init () {
        this._super(...arguments);
        this.countries = [
          { abbrev: 'US' },
          { abbrev: 'AUS' },
        ];
      }
});
