function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function() {
		return ctrl.username;
	}, function(newValue, oldValue) {
		console.log("Username newVal: " + newValue + "   username oldValue: " + oldValue);
	});

	$scope.$watch(function() {
		return ctrl.country;
	}, function (newValue, oldValue) {
		console.log("deep Country newVal: " + newValue + "   deep Country oldValue: " + oldValue);
	}, true);

	$scope.$watchCollection(function() {
		return ctrl.country.name;
	}, function (newValue, oldValue) {
		console.log("Country newVal: " + newValue + "   Country oldValue: " + oldValue);
	});

}

UserController.$inject = ['$scope'];

angular
	.module('app')
	.controller('UserController', UserController);