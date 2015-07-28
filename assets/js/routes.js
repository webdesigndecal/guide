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
})
