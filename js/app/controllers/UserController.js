function UserController($scope) {
	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function(){
		return this.username;
	}, function(newValue, oldValue){
		console.log('name updated!');
	});

	$scope.$watchCollection(function(){
		return this.country;
	}, function(newValue, oldValue){
		console.log('value updated!')
	}, true);
}

angular
	.module('app')
	.controller('UserController', UserController);
