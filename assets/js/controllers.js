app.controller('NavController', ['$scope', '$location', function ($scope, $location) {
  $scope.hideNavBar = function (currentLocation) {
    return currentLocation === $location.path();
  };
}]);

app.controller('HomeController', ['$scope', function ($scope) {
  this.lectures = allLectures;
}])

app.controller('ArticleController', ['$scope', function ($scope) {
  $scope.copyText = function (event) {

    // getting the <code> div
    var target = angular.element(event.target)[0].nextElementSibling;
    text = target.innerText;
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }
}])
