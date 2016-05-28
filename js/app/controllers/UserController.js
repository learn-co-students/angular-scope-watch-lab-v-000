function UserController($scope) {
	var user = this;
	user.username = 'enoch2k2';

	user.country = {
		name: {
			abbr: 'usa',
			fullName: 'United States of America'
		},
		population: 'alot'
	};

	$scope.$watch(function(){
		return user.username;
	}, function(newValue, oldValue) {
		console.log('value updated!');
	});

	$scope.$watch(function(){
		return user.country;
	}, function(newValue, oldValue){
		console.log('country deep value updated!!')
	}, true);

	$scope.$watchCollection(function(){
		return user.country;
	}, function(newValue, oldValue){
		console.log('collection updated!')
	});
}

angular
	.module('app')
	.controller('UserController', UserController);
