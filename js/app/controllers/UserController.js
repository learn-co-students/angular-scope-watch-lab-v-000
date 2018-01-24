function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
	};

  $scope.$watch(function () {
    return this.username;
  }, function (newValue, oldValue) {
    console.log('Username has been updated!, newValue');
  });

  $scope.$watch(function () {
    return this.country;
  }, function (newValue) {
    console.log('Country has been updated!');
  }, true);

  $scope.$watchCollection(function () {
    return this.country.name;
  }, function (newValue) {
    console.log('Country name has been updated!');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);