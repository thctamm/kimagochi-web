import angular from 'angular';
import uiRouter from 'angular-ui-router';
import kimComponent from './kim.component';

let kimModule = angular.module('kim', [
  uiRouter
])

.component('kim', kimComponent)

.name;

export default kimModule;
