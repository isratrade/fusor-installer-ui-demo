import Ember from 'ember';

export default Ember.Route.extend({

  activate: function() {
    this.controllerFor('side-menu').set('etherpadName', '40'); //route-deployments-new
  },

  deactivate: function() {
    this.controllerFor('side-menu').set('etherpadName', '');
  }

});
