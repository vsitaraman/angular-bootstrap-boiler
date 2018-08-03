
/**
 * Main AngularJS Web Application
 */
var app = angular.module('vsApp', [
  'ngRoute',
  'updateMeta'
]);

/** 
 * Scope Functions
*/
app.run(function($rootScope, $http, $sce, $compile, $location) {
    // Text Parsing
    $rootScope.trustHTML = function(obj) {
      console.log(obj);
      obj = $sce.trustAsHtml(obj);
      return obj;
    };
    $rootScope.isActive = function(route) {
        return route === $location.path();
    };
    $rootScope.title = "YourSite — We excel at mediocre slogans.";
    $rootScope.url = "website.com";
    $rootScope.website = "YourSite";
    $rootScope.suffix = " — YourSite";
    $rootScope.company = "Example, Inc.";
    $rootScope.twitter = "@website";
    $rootScope.author = "Viputheshwar Sitaraman";
    $rootScope.email = "hello@website.com";
    $rootScope.metas = [{
      name:'description',
      content :'AngularJS Dynamic Metas'
    },{
      name:'keywords',
      content :'AngularJS, Dynamic, Metas'
    },{
      charset:'UTF8'
    }];

    $rootScope.spotify = function(scope) {
      scope.game[0].spotify = $sce.trustAsResourceUrl('https://open.spotify.com/embed/'+scope.game[0]['embed-type'].toLowerCase()+'/'+scope.game[0]['spotify-src'])
    } 
});


/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {
      templateUrl: "partials/home.html", 
      controller: "PageCtrl"
      // controller: "HomeHeader"
    })
    .when("/terms", {
      templateUrl: "partials/terms.html", 
      controller: "PageCtrl",
    })
    .when("/privacy", {
      templateUrl: "partials/privacy.html", 
      controller: "PageCtrl",
    }) // else 404
    .otherwise("/404", {
      templateUrl: "partials/404.html", 
      controller: "PageCtrl"
  });
  // $locationProvider.html5Mode(true);
}]
// , ['$sceDelegateProvider', function($sceDelegateProvider) {
//     $sceDelegateProvider.resourceUrlWhitelist([
//         'self',
//         'https://*.youtube.com/**',
//         'https://www.youtube.com/**',
//         'https://*.you.tube/**',
//         'https://*.spotify.com/**'
//     ]);
// }]
);

/**
 * Controls all Pages
 */
app.controller('PageCtrl', function ($scope, $location, $http) {
  console.log("Page Controller reporting for duty.");
  $scope.url = $location.absUrl();

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })

  $('body').scrollspy({ 
  	target: '#navbar' 
  })
});