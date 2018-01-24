function UserController($scope) {
  this.username = '';

  this.country = {
    name: {

    }
  };

  var upperThis = this;

  $scope.$watch(function(){
    return upperThis.username;
  },
  function(curr, prev){
    console.log('username: ' + curr);
  });

  $scope.$watchCollection(function(){
    return upperThis.country;
  },
  function(curr, prev){
    console.log('population: ' + curr.population);
  });

  $scope.$watch(function(){
    return upperThis.country;
  },
  function(curr, prev){
    console.dir(curr);
  },  true  ); //deep-watch


}

angular
.module('app')
.controller('UserController', UserController);
