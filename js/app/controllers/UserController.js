angular
	.module('app')
	.controller('UserController', UserController);

function UserController($scope) {
	const vm = this;
	vm.username = '';
	vm.country = {
		name: {
		}
	};

	$scope.$watch(function () {
		return vm.username;
	}, function (newName, prevName) {
		console.log('Username updated', newName);
	});

	$scope.$watch(function () {
		return vm.country;
	}, function (newName) {
		console.log('Country info updated');
	}, true);

	$scope.$watchCollection(function () {
		return vm.country.name;
	}, function (newName) {
		console.log('Country name updated');
	});
}
