function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};
	$scope.$watch(function () {
		return this.username;
	}, function(newValue, oldValue) {
		console.log('value updated');
	});

	$scope.$watch(function () {
		return this.country;
	}, function(newValue, oldValue) {
		console.log('Country info updated');
	}, true);

	$scope.$watchCollection(function () {
		return this.country.name;
	}, function(newValue) {
		console.log('Country name updated')
	})
}

angular
	.module('app')
	.controller('UserController', UserController);
