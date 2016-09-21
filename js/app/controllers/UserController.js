function UserController($scope) {

	var ctrl = this;

	this.username = '';

	this.country = {
		name: {

		}
	};

	$scope.$watch(function () {
        return ctrl.username;
    }, function (newValue, oldValue) {
        console.log('username updated!');
    });

    $scope.$watchCollection(function () {
        return ctrl.country;
    }, function (newValue, oldValue) {
        console.log('country updated!');
    });

}

angular
	.module('app')
	.controller('UserController', UserController);