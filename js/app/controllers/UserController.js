function UserController($scope) {
    var user = this;
    user.username = '';

    user.country = {
        name: {
            short: '',
            full: ''
        },
        population: ''
    };

    // watch username change
    $scope.$watch(function() {
        return user.username;
    }, function(newValue, oldValue) {
        console.log('username updated!');
    });

    // Deep watch
    $scope.$watch(function() {
        return user.country;
    }, function(newValue, oldValue) {
        console.log('Country general info updated!');
    }, true);

    // Only watch change in country name
    $scope.$watchCollection(function() {
        return user.country.name;
    }, function(newValue, oldValue) {
        console.log('Country name Updated');
    });

    // Only watch change in country population
    $scope.$watchCollection(function() {
        return user.country.population;
    }, function(newValue, oldValue) {
        console.log('Country population Updated');
    });
}

angular
    .module('app')
    .controller('UserController', UserController);
