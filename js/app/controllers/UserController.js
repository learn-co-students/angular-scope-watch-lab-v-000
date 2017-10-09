function UserController($scope) {
  var user = this;

  user.username = '';

	user.country = {
		name: {

		}
	};

  $scope.$watch(function () {
    return user.username;
  }, function (newValue, oldValue) {
    console.log('username updated'); // ('Username updated', newValue);
  });

  $scope.$watch(function () {
    return user.country;
  }, function (newValue, oldValue) {
    console.log('country information updated!');
  }, true);

  $scope.$watchCollection(function () {
    return user.country.name;
  }, function (newValue, oldValue) {
    console.log('country name updated!');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);
