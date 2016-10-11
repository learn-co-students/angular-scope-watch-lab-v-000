function UserController($scope) {
	var ctrl = this;

	ctrl.ctrlname = '';

	ctrl.country = {
			name: {
					short: 'US',
					full: 'United States',
					population: '318.9 million';
			}
	};

	$scope.$watch(function () {
			return ctrl.username;
	}, function (newValue, oldValue) {
			console.log("Username updated.", newValue);
	});

	$scope.$watch(function () {
			return ctrl.country;
	}, function (newValue) {
			console.log("Country info updated.");
	});

	$scope.$watchCollection(function () {
			return ctrl.country.full;
	}, function (newValue) {
			console.log("Country updated.");
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
