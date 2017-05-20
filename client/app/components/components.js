import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Kim from './kim/kim';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Kim
])

.name;

export default componentModule;
