function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};
	$scope.$watch(function() {
		return ctrl.username;
	}, function(newVal, prev) {

	});
	$scope.$watch(function() {
		return ctrl.country;
	}, function(newVal) {

	}, true);
	$scope.$watchCollection(function() {
		return ctrl.country.name;
	}, function(newVal) {

	});
}

angular
	.module('app')
	.controller('UserController', UserController);
