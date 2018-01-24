function UserController($scope) {
	this.username = '';

	this.country = {
		name: {
      abbreviation: 'USA',
      fullName: "United States of America"
		},
    population: 'humans and such'
	};

  $scope.$watch(function () {
      return this.username;
  }, function (newValue, oldValue) {
      console.log('username updated!');
  });

  $scope.$watch(function () {
      return this.country;
  }, function (newValue, oldValue) {
      console.log('deep country updated!');
  }, true);

  $scope.$watchCollection(function () {
      return this.country;
  }, function (newValue, oldValue) {
      console.log('collection watch updated!');
  });
}

angular
	.module('app')
	.controller('UserController', UserController);