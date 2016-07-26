'use strict';

//var app = angular.module('myApp', ['mgcrea.ngStrap', 'ui.router']);

var app = angular.module('myApp', ['mgcrea.ngStrap', 'ui.router'])
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}])

/*app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/html/home.html',
    controller: 'homeCtrl'
  })
  .state('about', {
    url: '/about', 
    templateUrl: 'html/about.html',
    controller: 'aboutCtrl'
  })
  .state('travels', {
    url: '/travels', 
    templateUrl: 'html/travels.html',
    controller: 'travelsCtrl'
  })
  .state('projects', {
    url: '/projects', 
    templateUrl: 'html/projects.html',
    controller: 'projectsCtrl'
  })
  $urlRouterProvider.otherwise('/');
});*/

