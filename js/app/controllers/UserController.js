function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};

  $scope.$watch(function () {
    return this.username;
  }, function (newValue, oldValue) {
    console.log('username has been updated to ' + newValue);
  });

  $scope.$watch(function () {
    return this.country;  
  }, function (newValue, oldValue) {
    console.log('country has been updated with ' + newValue);
  }, true);

  $scope.$watchCollection(function () {
    return this.country.name;
  }, function (newValue, oldValue) {
    console.log('country name has been updated')
  });

}

angular
	.module('app')
	.controller('UserController', UserController);