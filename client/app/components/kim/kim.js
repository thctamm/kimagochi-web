import angular from 'angular';
import uiRouter from 'angular-ui-router';
import kimComponent from './kim.component';

let kimModule = angular.module('kim', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('kim', {
      url: '/kim',
      component: 'kim',
      params: {id: 0}
    });
})


.component('kim', kimComponent)

.name;

export default kimModule;
