function UserController($scope) {
	var user = this;
	user.username = '';

	user.country = {
		name: {
			short: "",
			full: ""
		},
		population: ""
	};

	$scope.$watch(function () {
		return user.username;
	}, function (newValue, oldValue) {
		console.log("Username updated!");
	});

	$scope.$watch(function () {
		return user.country;
	}, function (newValue, oldValue) {
		console.log("Country updated!");
	}, true);

	$scope.$watchCollection(function () {
		return user.country.name;
	}, function (newValue, oldValue) {
		console.log("Country name updated!");
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
