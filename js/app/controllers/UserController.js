function UserController($scope) {
  var ctrl = this;

	this.username = '';

	this.country = {
		name: {short: '',
    full: ''},
    population: ''
	};

   $scope.$watch(function () {
        return ctrl.username;
    }, function (newValue, oldValue) {
        console.log('username updated!');
    });

   $scope.$watch(function () {
        return ctrl.country;
    }, function (newValue, oldValue) {
        console.log('the whole country is being watched!');
    }, true);

   $scope.$watchCollection(function () {
        return ctrl.country.name;
    }, function (newValue, oldValue) {
        console.log('country name collection updated!');
    });
}

angular
	.module('app')
	.controller('UserController', UserController);