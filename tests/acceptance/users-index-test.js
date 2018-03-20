import { module, test } from 'qunit';
import { visit, currentURL, find, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | users index', (hooks) => {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /users should display user information', async (assert) => {
    let users = server.createList("user", 5);
    await visit('/users');

    assert.equal(currentURL(), '/users');
    assert.equal(find('.heading').textContent, 'User List'); //EmberJs for testing is moving away from Jquery dependency
    assert.equal(findAll('.row-item').length,5);
    assert.equal(findAll('.test-user-firstName')[0].textContent,users[0].firstName);
    
  });
});
