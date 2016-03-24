function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	$scope.$watch(function () {
		return ctrl.username;
	}, function (newValue, OldValue) {
		console.log('username updated!');
	});

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function () {
		return ctrl.country;
	}, function (newValue, OldValue) {
		console.log('country updated!');
	}, true);

	$scope.$watchCollection(function () {
		return ctrl.country.name;
	}, function (newC, oldC) {
		console.log('country name updated!');
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
