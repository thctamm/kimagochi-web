import angular from 'angular';
import uiRouter from 'angular-ui-router';
import doomComponent from './doom.component';

let doomModule = angular.module('doom', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('doom', {
      url: '/doom',
      component: 'doom'
    });
})

.component('doom', doomComponent)

.name;

export default doomModule;
