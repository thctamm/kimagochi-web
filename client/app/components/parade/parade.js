import angular from 'angular';
import uiRouter from 'angular-ui-router';
import paradeComponent from './parade.component';

let paradeModule = angular.module('parade', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('parade', {
      url: '/parade',
      component: 'parade',
      params: {'id': 0, 'success': 1}
    });
})

.component('parade', paradeComponent)

.name;

export default paradeModule;
