function UserController() {
	this.username = '';

	this.country = {
		name: {
      short: "US",
      full:'United States'
		}
    population: {
      'Trump-Mill'
    }
	};

  $scope.$watch(function () {
    return this.username;
  }, function (newValue, oldValue) {
    console.log('value updated!');
  });

  $scope.$watchCollection(function () {
    return this.country;
  }, function (newValue, oldValue) {
    console.log('value updated!');
  }, true);

}

angular
	.module('app')
	.controller('UserController', UserController);