function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function(){
		return this.username
	}, function(New, Old){
		console.log("Username has been updated to " + New);
	});

	$scope.$watch(function(){
		return this.country;
	}, function(New, Old){
		console.log("Country has been updated!");
	}, true);

	$scope.$watchCollection(function(){
		return this.country.name;
	}, function(New, Old){
		console.log("Country name has been updated!");
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
