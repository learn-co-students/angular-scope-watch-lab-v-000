function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
	};
	$scope.$watch(function(){
		return this.username;
	}, function(newValue, oldValue){
		console.log('username was updated from ' + oldValue + ' to ' + newValue);
	});

	$scope.$watch(function(){
		return this.country;
	}, function(){
		console.log('country was updated deep')
	}, true);

	$scope.$watchCollection(function(){
		this.country;
	}, function(){
		console.log('Country was changed not so deep.');
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
