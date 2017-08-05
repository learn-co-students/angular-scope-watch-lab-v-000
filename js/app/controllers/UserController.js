function UserController($scope) {
	var user = this;

	user.username = '';

	user.country = {
		name: {
			short: '',
			full: ''
		}, 
		population: ''
	};

	$scope.$watch(function(){
		return user.username;
	}, function(oldValue, newValue){
		console.log('old value was ' + oldValue + ', new value is ' + newValue);
	});

	$scope.$watch(function(){
		return user.country;
	},function(oldValue, newValue){
		console.log('before short: ' + oldValue.name.short + ' full: ' + oldValue.name.full + ' population: ' + oldValue.population + ' => after short: ' + newValue.name.short + ' full: ' + newValue.name.full + ' population: ' + newValue.population);
	}, true);

	$scope.$watchCollection(function(){
		return user.country.name;
	}, function(oldValue, newValue){
		console.log('Collection before short: ' + oldValue.short + ' full: ' + oldValue.full )
	});
}

angular
	.module('app')
	.controller('UserController', UserController);