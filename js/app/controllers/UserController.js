function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function(){
		return this.username;
	}, function(newValue, oldValue){
		console.log(newValue,oldValue);
	});

	$scope.$watchCollection(function(){
		return this.country.name;
	}, function(newValue, oldValue){
		console.log(newValue,oldValue);
	});

	$scope.$watch(function(){
		return this.country;
	}, function(newValue, oldValue){
		console.log(newValue,oldValue);
	}, true);

angular
	.module('app')
	.controller('UserController', UserController);
