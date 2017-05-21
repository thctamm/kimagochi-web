import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Kim from './kim/kim';
import Rockets from './rockets/rockets';
import Eat from './eat/eat';
import Doom from './doom/doom';
import Parade from './parade/parade';
import Factory from './factory/factory';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Kim,
  Parade,
  Eat,
  Doom,
  Factory,
  Rockets
])

.name;

export default componentModule;
