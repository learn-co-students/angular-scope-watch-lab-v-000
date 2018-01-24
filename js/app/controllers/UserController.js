function UserController($scope) {
	this.username = '';

  $scope.$watch(function () {
    return this.username;
  }, function (newValue, oldValue) {
    console.log('Value Updated! ' + newValue);
  });

	this.country = {
		name: {

		}
	};

  $scope.$watch(function() {
    return this.country;
  }, function (newValue) {
    console.log('Country Value ha been Updated: ' + newValue);
  }, true);

  $scope.$watch(function() {
    return this.country.name;
  }, function (newValue) {
    console.log('Country Name Updated: ' + newValue);
  })
}

angular
	.module('app')
	.controller('UserController', UserController);
