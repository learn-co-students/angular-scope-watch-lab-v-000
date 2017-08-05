function UserController($scope) {
	var time = 0
	var time2 = 0
	var ctrl = this
	this.username = '';

	this.country = {
		name: {
			short: "",
			full: ""
		},
		location: ""
	};

	$scope.$watch(function(){
		return ctrl.username;
	}, function(newValue, oldValue){
		console.log("Changed from " + oldValue + " to " + newValue)
	})

	$scope.$watchCollection(function(){
		return ctrl.country.name;
	}, function(newValue, oldValue){
		time += 1
		console.log("updated shallow " + time)
	})

	$scope.$watch(function(){
		return ctrl.country;
	}, function(newValue, oldValue){
		time2 += 1
		console.log("updated deep " + time2)
	}, true)
}

angular
	.module('app')
	.controller('UserController', UserController);