import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | payment-detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:payment-detail');
    assert.ok(route);
  });
});
