var app = angular.module('cv', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  
  $routeProvider
    .when('/', {
      controller:'DefaultViewController',
      templateUrl:'templates/normal.html',
    })
    .otherwise({
      redirectTo:'/'
    });
    
    $locationProvider.html5Mode(true);
})

app.controller('Main', ['$scope','$rootScope','$window', function($scope,$rootScope,$window) {
    
}]);

app.controller('DefaultViewController', ['$scope','$rootScope','$window', function($scope,$rootScope,$window) {
    
}]);

app.controller('pageSummary', ['$scope','$rootScope','$window', function($scope,$rootScope,$window) {
    
}]);

app.controller('imageBlurb', ['$scope','$rootScope','$window', function($scope,$rootScope,$window) {
    
}]);

app.controller('normalBlurb', ['$scope','$rootScope','$window', function($scope,$rootScope,$window) {
    
}]);