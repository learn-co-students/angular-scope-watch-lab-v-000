function UserController() {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {
			short: '',
			full: ''
		},
		population: ''
	}
}

$scope.$watch(function(){
	return ctr.username;
}, function(newVal, oldVal){})


$scope.$watchCollection(function(){
	return ctrl.country.name;
}, function(newVal, oldVal) {}

$scope.$watch(function(){
	return ctrl.country;
}, function(newVal, oldVal){
}, true)


angular
	.module('app')
	.controller('UserController', UserController);
