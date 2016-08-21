function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};

    $scope.$watch(function () {
    return user.username;
  }, function (newValue. OldValue) {
    console.log(‘value updated!’);
  });

       $scope.$watch(function () {
    return user.country;
  }, function (newValue. OldValue) {
    console.log(‘value updated!’);
  },true);

        $scope.$watchCollection(function () {
        return user.country.name;
    }, function (newValue, oldValue) {
        console.log('value updated!');
    });


}

angular
	.module('app')
	.controller('UserController', UserController);