function UserController() {
	var ctrl = this;

	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};


	$scope.$watch(function () {
		return ctrl.username;
	}, function (newValue, oldValue) {
		console.log('value updated!')
	});

	$scope.$watch(function () {
		return ctrl.country;
	}, function (newValue, oldValue) {
		console.log('value updated!');
	}, true);

	$scope.$watchCollection(function () {
		return ctrl.country;
	}, function (newValue, oldValue) {
		console.log('value updated!');
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
