(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(global) {
  'use strict';


  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.check = function() {
      var dishes = $scope.dishes.split(',');
      if (dishes.length > 4) {
        $scope.message = "Too much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
    };
  }

})(window);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG5cbiAgYW5ndWxhci5tb2R1bGUoJ0x1bmNoQ2hlY2snLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0x1bmNoQ2hlY2tDb250cm9sbGVyJywgTHVuY2hDaGVja0NvbnRyb2xsZXIpO1xuXG4gIEx1bmNoQ2hlY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xuICBmdW5jdGlvbiBMdW5jaENoZWNrQ29udHJvbGxlcigkc2NvcGUpIHtcblxuICAgICRzY29wZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRpc2hlcyA9ICRzY29wZS5kaXNoZXMuc3BsaXQoJywnKTtcbiAgICAgIGlmIChkaXNoZXMubGVuZ3RoID4gNCkge1xuICAgICAgICAkc2NvcGUubWVzc2FnZSA9IFwiVG9vIG11Y2ghXCI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBcIkVuam95IVwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxufSkod2luZG93KTtcbiJdfQ==
