function UserController() {
	this.username = '';

	this.country = {
		name: {
			short: '',
			full: ''
		},
		population: ''
	};

	$scope.$watch(function () {
		return this.username;
	}, function (newValue, oldValue) {
		console.log('Username was updated');
	});

	$scope.$watch(function () {
			return ctrl.country;
	}, function (newValue, oldValue) {
			console.log('value updated!');
	}, true);

	$scope.$watchCollection(function () {
		return this.country.name;
	}, function (newValue, oldValue) {
		console.log('Username was updated');
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
