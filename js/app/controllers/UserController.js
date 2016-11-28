function UserController($scope) {
	var user = this;
	user.username = '';

	user.country = {
		name: {
			short: "",
			full: ""
		},
		population: ""
	};

	$scope.$watch(function (){
		return user.username;
	}, function () {
		console.log('username');
		console.log(user.username);
	});

	$scope.$watch(function (){
		return user.country;
	}, function () {
		console.log('country');
	}, true);

$scope.$watchCollection(function (){
	return user.country;
}, function () {
	console.log('country');
});
}

angular
	.module('app')
	.controller('UserController', UserController);
