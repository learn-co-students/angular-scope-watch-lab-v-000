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
		console.log("Username was " + oldValue + ", now it's " + newValue);
	});

	$scope.$watch(function () {
		return user.country;
	}, function (newValue, oldValue) {
		console.log(user.country);
	}, true);

	$scope.$watchCollection(function () {
		return user.country.name;
	}, function (newValue, oldValue) {
		console.log(user.country.name);
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
