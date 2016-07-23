function UserController($scope) {
	var ctrl = this;
	this.username = '';

	this.country = {
		name: {
			short: 'USA', 
			full: 'United States of America'
		},
		population: 319000000
	};

	$scope.$watch(function(){
		return ctrl.username;
	}, function(oldValue, newValue) {
		console.log('value updated!');
	});

	$scope.$watch(function(){
		return ctrl.country;
	}, function(oldValue, newValue){
		console.log('value updated!');
	}, true);

	$scope.$watchCollection(function(){
		return ctrl.country.name;
	}, function(oldValue, newValue){
		console.log('value updated!');
	});
}

angular
	.module('app')
	.controller('UserController', UserController);