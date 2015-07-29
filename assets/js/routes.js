app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './pages/home.html'
    })
    .state('1', {
      url: '/1',
      templateUrl: './pages/week-1.html'
    })
    .state('2', {
      url: '/2',
      templateUrl: './pages/week-2.html'
    })
    .state('3', {
      url: '/3',
      templateUrl: './pages/week-3.html'
    })
    .state('4', {
      url: '/4',
      templateUrl: './pages/week-4.html'
    })
    .state('5', {
      url: '/5',
      templateUrl: './pages/week-5.html'
    })
})


app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
  $rootScope.$on('$stateChangeStart', function () {
    // start the loading bar and set it to a reasonable position
    NProgress.start();
    NProgress.set(0.3);
  });

  $rootScope.$on('$viewContentLoaded', function () {
    // scroll to top of page
    $('body').scrollTop(0);
    // end the progress bar
    NProgress.done();

    Prism.highlightAll();
  });

}])
