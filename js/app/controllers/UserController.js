function UserController() {
	var user = this;

	user.username = '';

	user.country = {
		name: {

		}
	};

	$scope.$watch(function () {
		return user.username;
	}, function (newValue, oldValue) {
		console.log("Username has been updated");
	});

	$scope.$watch(function () {
    return user.country;
  }, function (newValue, oldValue) {
    console.log('Country info has been updated');
  }, true);

  $scope.$watchCollection(function () {
    return user.country.name;
  }, function (newValue, oldValue) {
    console.log('Country name has been updated');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);
