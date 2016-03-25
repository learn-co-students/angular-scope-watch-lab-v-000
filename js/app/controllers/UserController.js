function UserController($scope) {
	var user = this;

	this.username = '';

	this.country = {
		name: {
			short: '',
			full: '',
			population: ''
		}
	};

// watch username
	$scope.$watch(function() {
		// value returned to controller
		return user.username;
	}, function(newValue, oldValue) {
		// executed on dirty
		console.log(user.username);
	});

// deep watch
	$scope.$watch(function() {
		return user.country;
	}, function(newVal,oldVal) {
		console.log('Deep Watch Alert')
	}, true)

	$scope.$watchCollection(function() {
		return [user.country.name.short, user.country.name.full];
	}, function(newVal, oldVal) {
		console.log('watchCollection '+ oldVal + ' -> ' + newVal)
	}, true)

}

angular
	.module('app')
	.controller('UserController', UserController);
