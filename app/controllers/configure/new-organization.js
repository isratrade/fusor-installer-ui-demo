import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['configure'],
  createdOrganization: {},
  fields: {},
  actions: {
    cancel: function() {
      alert('cancel');
    },
    createOrganization: function() {
      var self = this;
      var organization = this.store.createRecord('organization', this.get('fields'));
      organization.save().then(function() {
        self.set('createdOrganization', organization)
        self.transitionToRoute('configure');
      }, function() {
        alert('error');
      });
    }
  }
});
