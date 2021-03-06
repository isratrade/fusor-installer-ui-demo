import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  // log when Ember generates a controller or a route from a generic class
  LOG_ACTIVE_GENERATION: true,
  // log when Ember looks up a template or a view
  LOG_VIEW_LOOKUPS: true
});

Router.map(function() {

  this.route('install');

  this.resource('installer', function() {
    this.resource('network', function() {
      this.resource('network-config', { path: '/:network_id' })
    });
    this.resource('ssh');
    this.resource('foreman');
    this.resource('smart-proxy');
    this.resource('compute-resources');
    this.resource('katello');
    this.resource('puppet');
    this.resource('plugins');
    this.resource('installer-review', { path: '/installer/review' });
  });

  this.route('login');
  this.route ('setpassword');

  this.route('rhci', { path: '/deployments/new' });
  this.route('deployments');

  this.resource('deployment', function() {

    this.resource('satellite', function() {
      this.resource('configure');
      this.resource('configure-organization');
      this.resource('configure-environment');
    });

    this.resource('rhev', function() {
      this.resource('rhev-setup', { path: 'setup' });
      this.resource('hypervisor', function() {
        this.route('discovered-host');
        this.route('existing-host');
        this.route('new-host');
      });
      this.resource('engine', function() {
        this.route('hypervisor');
        this.route('discovered-host');
        this.route('existing-host');
        this.route('new-host');
      });
      this.resource('networking');
      this.resource('storage');
      this.resource('rhev-options', { path: 'configuration' });
    });

    this.resource('openstack', function() {
      this.resource('osp-settings', { path: 'settings' });
      this.resource('osp-network', { path: 'network' });
      this.resource('osp-overview', { path: 'overview' });
      this.resource('osp-configuration', { path: 'configuration' });
    });
    this.resource('cloudforms', function() {
      this.resource('where-install');
    });
    this.resource('review', function() {
      this.resource('subscriptions');
      this.resource('products');
      this.route('installation');
      this.route('progress');
    });
  });


  this.resource('hostgroups', function() {
    this.resource('hostgroup', { path: '/:hostgroup_id' }, function() {
      this.route('edit');
    });
  });


  this.route('hostgroup/edit');
  this.route('review/installation');
  this.route('review/progress');
});

export default Router;
