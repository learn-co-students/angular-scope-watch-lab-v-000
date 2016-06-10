function UserController($scope) {
  var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function() {
		return ctrl.username;
	}, function (newValue, oldvalue) {
		console.log('name updated!');
	});

	$scope.$watchCollection(function() {
		return ctrl.country;
	}, function(newValue, oldValue) {
		console.log("country updated!");
	});

	$scope.watch(function() {
		return ctrl.country;
	}, function(newValue, oldValue) {
		console.log("country updated deep");
	}, true);


}

angular
	.module('app')
	.controller('UserController', UserController);
