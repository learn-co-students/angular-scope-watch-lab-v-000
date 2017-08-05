function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {
			short: 'Pooty',
			full: 'Pooty Tang'
		},
		population: 2389488239
	};

	$scope.$watch(function () {
		return ctrl.username;
	}, function (newValue, oldValue) {
		console.log('name value updated!');
	});

	$scope.$watch(function () {
		return ctrl.country;
	}, function (newValue, oldValue) {
		console.log('country updated');
	}, true );

	$scope.$watchCollection(function () {
		return ctrl.country.name;
	}, function (newValue, oldValue) {
		console.log('country name updated');
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
