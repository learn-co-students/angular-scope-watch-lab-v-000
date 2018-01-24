function UserController($scope) {
	var ctrl = this;

	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function () {
		return ctrl.username;
	}, function (newValue, oldValue) {
		console.log(oldValue + ' changed to ' + newValue);
	});

	$scope.$watch(function () {
		return ctrl.country;
	}, function (oldValue, newValue) {
		console.log('deep watch changed!');
	}, true);

	$scope.$watchCollection(function () {
		return ctrl.country.name;
	}, function (oldValue, newValue) {
		console.log('country name changed');
	});

}

angular
	.module('app')
	.controller('UserController', UserController);
