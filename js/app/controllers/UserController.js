function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};


	$scope.$watch(function () {
 		 return ctrl.username;
  }, function (newValue, oldValue) {
 		 console.log('Username updated!', newValue);
  }, true);

	$scope.$watch(function () {
		 return ctrl.country.name.short;
	}, function (newValue, oldValue) {
		 console.log('Short name is updated!', newValue );
	}, true);

	$scope.$watch(function () {
		 return ctrl.country.name.full;
	}, function (newValue, oldValue) {
		 console.log('Full Name is updated!', newValue );
	}, true);

	$scope.$watch(function () {
		 return ctrl.country.population;
	}, function (newValue, oldValue) {
		 console.log('population is updated!', newValue );
	}, true);

}

angular
	.module('app')
	.controller('UserController', UserController);
