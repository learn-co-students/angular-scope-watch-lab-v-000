function UserController() {
	var user = this;
  user.username = 'Jaclyn Ciringione';

	user.country = {
		name: {
      abbr: 'America',
      fullName: 'The United States of America'
    },
    population: '330 Million'
  };

    $scope.$watch(function () {
        return user.username;
    }, function (newValue, oldValue) {
        console.log('username updated!');
    });

    $scope.$watch(function () {
        return user.country;
    }, function (newValue, oldValue) {
        console.log('deep watch value updated!');
    }, true);

    $scope.$watchCollection(function () {
        return user.country.name;
    }, function (newValue, oldValue) {
        console.log('country updated!');

  });
}

angular
	.module('app')
	.controller('UserController', UserController);