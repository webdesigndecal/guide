app.controller('NavController', ['$scope', '$location', function ($scope, $location) {
  $scope.hideNavBar = function (currentLocation) {
    return currentLocation === $location.path();
  };
}]);

app.controller('HomeController', ['$scope', function ($scope) {
  this.lectures = allLectures;
}])
