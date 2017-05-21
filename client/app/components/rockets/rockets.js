import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rocketsComponent from './rockets.component';

let rocketsModule = angular.module('rockets', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('rockets', {
      url: '/rockets',
      component: 'rockets',
      params: {'id': 0, 'success': 1}
    });
})

.component('rockets', rocketsComponent)

.name;

export default rocketsModule;
