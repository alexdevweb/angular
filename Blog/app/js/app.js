var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'home.html', controller: 'postsCtrl'})
        .when('/comments/:id', {templateUrl: 'comments.html', controller: 'commentsCtrl'})
        .otherwise({redirectTo : '/'});
});