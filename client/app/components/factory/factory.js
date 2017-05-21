import angular from 'angular';
import uiRouter from 'angular-ui-router';
import factoryComponent from './factory.component';

let factoryModule = angular.module('factory', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('factory', {
      url: '/factory',
      component: 'factory',
      params: {id: 0}
    });
})

.component('factory', factoryComponent)

.name;

export default factoryModule;
