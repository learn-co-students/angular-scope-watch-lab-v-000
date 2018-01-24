function UserController() {
	this.username = '';

	this.country = {
		name: {

		}
	};

    $scope.$watch(function () {
    return user.username;
  }, function (newValue. OldValue) {
    console.log('Username updated', newValue);
  });

       $scope.$watch(function () {
    return user.country;
  }, function (newValue. OldValue) {
    console.log(‘Country info updated!’);
  },true);

        $scope.$watchCollection(function () {
        return user.country.name;
    }, function (newValue, oldValue) {
        console.log('Country name updated!');
    });


}

angular
	.module('app')
	.controller('UserController', UserController);