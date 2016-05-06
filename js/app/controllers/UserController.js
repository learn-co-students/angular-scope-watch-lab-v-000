function UserController($scope) {
	var ctrl = this;
	this.username = '';

	this.country = {
		name: {

		}
	};

  $scope.watch(function(){
		return ctrl.username;
	}, function(newVal, oldVal) {
		console.log('Username Updated!');
	});

	$scope.watch(function() {
		return ctrl.country;
	}, function(newVal, oldVal) {
		console.log("Country is updated!");
	}, true)

	$scope.watchCollection(function() {
		return ctrl.country;
	}, function(newVal, oldVal) {
		console.log("Country is updated!");
	});



}

angular
	.module('app')
	.controller('UserController', UserController);
