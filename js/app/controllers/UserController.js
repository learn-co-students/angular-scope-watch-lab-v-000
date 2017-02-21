function UserController($scope) {
	var ctrl = this;
	this.username = '';

	this.country = {
		name: {
			short: '',
			full: ''
		},
		population: ''
	};

	$scope.$watch(function(){
		return ctrl.username;
	}, function(newValue, oldValue){
		console.log('User updated!');
	});

	$scope.$watchCollection(function () {
			 return ctrl.country.name;
	 }, function (newValue, oldValue) {
			 console.log('Name updated!');
	 });

	 $scope.$watch(function () {
			 return ctrl.country;
	 }, function (newValue, oldValue) {
			 console.log('Object updated!');
	 }, true);
}


angular
	.module('app')
	.controller('UserController', UserController);
