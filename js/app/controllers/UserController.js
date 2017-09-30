function UserController($scope) {
	var ctrl = this
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function() {
		return ctrl.username;
	}, function(newValue, oldValue) {
			console.log('User updated!');
	})

	$scope.$watch(function() {
		return ctrl.country;
	}, function(newValue, oldValue) {
		console.log('country deep nesting updated!');
	}, true)

	$scope.$watchCollection(function() {
		return ctrl.country.name;
	}, function(newValue) {
			console.log('country one level updated');
	})
}

angular
	.module('app')
	.controller('UserController', UserController);
