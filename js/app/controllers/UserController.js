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
		console.log('Username updated!', newValue)
	});

	$scope.$watch(function () {
		return ctrl.country;
	}, function (newValue) {
		console.log('Country info updated!');
	}, true);

	$scope.$watchCollection(function () {
		return ctrl.country.name;
	}, function (newValue) {
		console.log('Country name updated!')
	});
}

angular
	.module('app')
	.controller('UserController', UserController);

// Using $scope.$watch, check whenever the username gets updated.
// Deep watch the whole country object to see when any value in it changes (including the country's short and full names).
// Use $watchCollection to see only when the country's full and short names are updated.