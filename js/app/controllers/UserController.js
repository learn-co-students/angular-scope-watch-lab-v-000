function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.watch(function () {
		return ctrl.username;
	}, function (newValue, oldValue) {
		console.log('username updated!');
	});

	$scope.watch(function () {
		return ctrl.country;
	}, function (newValue, oldValue) {
		console.log('Country object updated!');
	}, true);

	$scope.watchCollection(function () {
		return ctrl.country;
	}, function (newValue, oldValue) {
		console.log('Country name updated!');
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
