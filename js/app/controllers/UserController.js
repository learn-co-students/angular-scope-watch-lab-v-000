function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
	};

  $scope.$watch(function() {
    return this.username;
  }, function(newValue, oldValue) {
    console.log('username updated!');
  });

  $scope.$watchCollection(function() {
    return this.country;
  }, function(newValue, oldValue) {
    console.log('country updated!');
  });

  $scope.$watch(function() {
    return this.country;
  }, function(newValue, oldValue) {
    console.log('country name updated!');
  }, true);
}

angular
	.module('app')
	.controller('UserController', UserController);