import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | users index', (hooks) => {
  setupApplicationTest(hooks);

  test('visiting /users', async (assert) => {
    server.createList("user", 5);
    await visit('/users');

    assert.equal(currentURL(), '/users');
    assert.equal(find('.user-row'),5)
  });
});
