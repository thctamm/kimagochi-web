import angular from 'angular';
import uiRouter from 'angular-ui-router';
import eatComponent from './eat.component';

let eatModule = angular.module('eat', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('eat', {
      url: '/eat',
      component: 'eat',
      params: {id: 0}
    });
})
.component('eat', eatComponent)

.name;

export default eatModule;
