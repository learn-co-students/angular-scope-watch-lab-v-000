function UserController($scope) {

	var vm = this;

	vm.username = '';

	vm.country = {
		name: {

		}
	};

	$scope.$watch(function() {
		return vm.username;
	}, function(oldValue, newValue) {
		console.log('Username changed from %s to %s.', newValue, oldValue);
	});

	$scope.$watch(function() {
		return vm.country;
	}, function(oldValue, newValue) {
		console.log('Country info changed: %o to %o.', newValue, oldValue);
	}, true);

	$scope.$watchCollection(function() {
		return vm.country.name
	}, function(oldValue, newValue) {
		console.log('Country name changed: %o to %o', newValue, oldValue);
	});
}

angular
	.module('app')
	.controller('UserController', UserController);