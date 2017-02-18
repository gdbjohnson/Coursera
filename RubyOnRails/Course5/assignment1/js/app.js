(function(global) {
  'use strict';


  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.check = function() {
      var dishes = $scope.dishes.split(',');
      if (dishes.length > 3) {
        $scope.message = "Too much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
    };
  }

})(window);
