function UserController() {
	var ctrl = this;
	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function () {
        return ctrl.username;
    }, function (newValue, oldValue) {
        console.log('value updated!');
    });

	$scope.$watchCollection(function () {
		        return ctrl.country;
		    }, function (newValue, oldValue) {
		        console.log('value updated!');
		    });


  $scope.$watch(function () {
        return ctrl.country;
    }, function (newValue, oldValue) {
        console.log('value updated!');
    }, true);


}

angular
	.module('app')
	.controller('UserController', UserController);
