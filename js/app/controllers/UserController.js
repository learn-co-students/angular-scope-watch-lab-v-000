function UserController($scope) {
	this.username = '';

	this.country = {
		name: {
			shortName: "USA", 
			fullName: "United States of America"
		},
		population: "2billion"

	};
	//Simple watch for username change, triggers every time username changes
	$scope.$watch(function () {
        return this.username;
    }, function (newValue, oldValue) {
        console.log('Name updated!');
    });
	//Collection watch for objects triggered for new, replaced, removed, reordered etc. but not for the changes in the item's values or keys etc
	$scope.$watchCollection(function () {
        return this.country;
    }, function (newValue, oldValue) {
        console.log('Country updated!');
  	});

	//Deep watching an object for changes within the objects (e.g changes in shortName for the Country) by passing in the third parameter 'true'
	$scope.$watch(function () {
        return this.username;
    }, function (newValue, oldValue) {
        console.log('Name updated!');
    },
			 true);


}

angular
	.module('app')
	.controller('UserController', UserController);
