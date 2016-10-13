function UserController($scope) {
  var ctrl = this;

	this.username = '';

	this.country = {
		name: {

		}
	};

  $scope.$watch(function() {
    return ctrl.username;
  }, function(newVal, oldVal) {
    console.log('Username was updated!', newVal, oldVal);
  });

  $scope.$watch(function() {
    return ctrl.country;
  }, function(newVal, oldVal) {
    console.log('Some attribute of country was updated!', newVal, oldVal);
  }, true);

  $scope.$watchCollection(function() {
    return ctrl.country.name;
  }, function(newVal, oldVal) {
    console.log('Country name was updated!', newVal, oldVal);
  });
}

angular
	.module('app')
	.controller('UserController', UserController);