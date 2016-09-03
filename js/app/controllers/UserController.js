function UserController($scope) {
  var ctrl = this;
	this.username = '';

	this.country = {
		name: {

		}
	};
  $scope.$watch(function() {
    return crtl.username;
  }, function(newValue, oldValue) {
    console.log("Username updated!");
  });

  $scope.$watch(function() {
    return ctrl.country;
  }, function(newValue, oldValue) {
    console.log("country object updated!");
  }, true);

  $scope.$watchCollection(function() {
    return ctrl.country;
  }, function(newValue, oldValue) {
    console.log("country names uodated!");
  });
}

angular
	.module('app')
	.controller('UserController', UserController);