function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	ctrl.country = {
		name: {
			
		}
	};

	ctrl.countryCollection = {
		name: {
			short: '',
			full: ''
		}
	};

	$scope.$watch(function() {
			return ctrl.username;
		}, function(newValue, oldValue) {
			console.log(`New USERNAME value: ${newValue}`);
		});

	$scope.$watch(function() {
			return ctrl.country;
		}, function(newValue, oldValue) {
			console.log(`New COUNTRY value: ${newValue}`);
		}, true);

	$scope.$watchCollection(function () {
	        return ctrl.countryCollection;
	    }, function (newValue, oldValue) {
	        console.log(`New CountryCollection value: ${newValue}`);
	    });

}

angular
	.module('app')
	.controller('UserController', UserController);