function UserController($scope) {
	var ctrl = this;

	ctrl.collection = {
		username: '',
		country: {
			name: {
				short: '',
				full: '',
			},
			population: ''
		}
	};

	$scope.$watchCollection(function () {
			return ctrl.collection;
	}, function (newValue, oldValue) {
			console.log(newValue);
	}, true);

}

angular
	.module('app')
	.controller('UserController', UserController);
