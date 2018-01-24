function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};
  $scope.$watch(function () {
        return this.username;
    }, function (newValue, oldValue) {
        console.log('value updated!');
    });
}

angular
	.module('app')
	.controller('UserController', UserController);