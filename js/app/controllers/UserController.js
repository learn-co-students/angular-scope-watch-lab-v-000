function UserController($scope) {
	this.username = '';

	this.country = {
		name: {
			short: '',
			full: ''
		},
		population: ''
	};

	$scope.$watch(function (){
		return this.username;
	}, function(newValue, oldValue) {
		console.log('username updated!', newValue);
	});

	$scope.$watch(function () {
		return this.country;
	}, function(newValue) {
		console.log('country updated!');
	}, true);

	$scope.$watchCollection(function () {
    return this.collection.name;
  }, function (newValue) {
    console.log('value updated!');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);
