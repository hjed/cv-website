var app = angular.module('cv', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  
  $routeProvider
    .when('/:page', {
      controller:'DefaultViewController',
      templateUrl:'templates/normal.html',
    })
    .otherwise({
      redirectTo:'/home'
    });
    
    $locationProvider.html5Mode(true);
})

app.directive('cvNormalBlurb',  function() {
    return {
        restrict: 'E', //html elements only
        scope: {
            smWidth : "=smWidth",
            mdWidth : "=mdWidth",
            title   : "=title",
            body    : "=body"
        },
        templateUrl: "components/normalBlurb.html"
    };
});


app.controller('Main', ['$scope','$rootScope','$window', function($scope,$rootScope,$window) {
    
}]);

app.controller('DefaultViewController', ['$scope','$rootScope','$routeParams','$sce', function($scope,$rootScope,$routeParams,$sce) {
    
    //Data structure to hold the different pages, ideally this would be in a database or hooked up to an api
    //But there isn't enought time for me to code that
    PAGES = {
        home: [
            {
               smWidth: "12",
               mdWidth: "4",
               title: "Langauges",
               body: $sce.trustAsHtml("test?")
            },
            {
               smWidth: "12",
               mdWidth: "4",
               title: "Technologies",
               body: $sce.trustAsHtml("test?")
            },
            {
               smWidth: "12",
               mdWidth: "4",
               title: "Me on the Web",
               body: $sce.trustAsHtml("test?")
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Work Experience in Brief",
               body: $sce.trustAsHtml("test?")
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Projects in Breif",
               body: $sce.trustAsHtml("test?")
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Leadership and Team Experience in Brief",
               body: $sce.trustAsHtml("test?")
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Interests and a bit More about me",
               body: $sce.trustAsHtml("test?")
            },
        ]
    };
    
    page = $routeParams.page;
    $scope.elements = PAGES[page];
    console.log($scope.elements[0].smWidth);
    
}]);

app.controller('pageSummary', ['$scope','$rootScope','$sce','$routeParams', function($scope,$rootScope,$sce, $routeParams) {
    
    PAGE_SUMMARIES = {
        home: {
            image : "img/LinkedinProfilePic.jpg",
            alt : "Profile image of Harry J.E Day",
            title : "Harry J.E Day",
            text : $sce.trustAsHtml(
                "<p>I am a third year, computer science student at the University of New South Wales, with a strong passion for computing." +
                "Through interning and extracurricular projects, I have gained strong skills in C++, Python, and Java as well as experience in a variety of other languages and frameworks.</p>" +
                "<p>I am also an experienced leader and team player, having developed strong group skills through constant involvement in extra-curricular activities such as" +
                "scouting and student leadership. This has culminated in my position leading the software team at a student society developing a Mars Rover for international competitions.</p>"
            )
        }
    }
    
    page = $routeParams.page;
    if(page == "") {
        page = "home";
    }
    
    
    $scope.image =  PAGE_SUMMARIES[page]["image"];
    $scope.alt   =  PAGE_SUMMARIES[page]["alt"];
    $scope.title =  PAGE_SUMMARIES[page]["title"];
    $scope.text  =  PAGE_SUMMARIES[page]["text"];
}]);

app.controller('imageBlurb', ['$scope','$rootScope','$window', function($scope,$rootScope,$window) {
    
}]);

