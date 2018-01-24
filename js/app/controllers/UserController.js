function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {
			full: '',
			short: ''
		}
	};

	$scope.$watch(function () {
		return ctrl.username;
	}, function (newValue, oldValue) {
		console.log(newValue);
	});

	$scope.$watchCollection(function () {
		return ctrl.country;
	}, function (newValue, oldValue) {
		console.log(newValue);
	});

	$scope.$watch(function () {
		return ctrl.country;
	}, function (newValue, oldValue) {
		console.log(newValue);
	}, true);
}

angular
	.module('app')
	.controller('UserController', UserController);
