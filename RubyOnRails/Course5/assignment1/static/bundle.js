(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(global) {
  'use strict';


  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.check = function() {
      if (!$scope.dishes) {
        $scope.message = "Please enter data first";
      }
      else {
        var dishes = $scope.dishes.split(',');
        if (dishes.length > 3) {
          $scope.message = "Too much!";
        }
        else {
          $scope.message = "Enjoy!";
        }
      }
    };
  }

})(window);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuXG4gIGFuZ3VsYXIubW9kdWxlKCdMdW5jaENoZWNrJywgW10pXG4gIC5jb250cm9sbGVyKCdMdW5jaENoZWNrQ29udHJvbGxlcicsIEx1bmNoQ2hlY2tDb250cm9sbGVyKTtcblxuICBMdW5jaENoZWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcbiAgZnVuY3Rpb24gTHVuY2hDaGVja0NvbnRyb2xsZXIoJHNjb3BlKSB7XG5cbiAgICAkc2NvcGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghJHNjb3BlLmRpc2hlcykge1xuICAgICAgICAkc2NvcGUubWVzc2FnZSA9IFwiUGxlYXNlIGVudGVyIGRhdGEgZmlyc3RcIjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZGlzaGVzID0gJHNjb3BlLmRpc2hlcy5zcGxpdCgnLCcpO1xuICAgICAgICBpZiAoZGlzaGVzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IFwiVG9vIG11Y2ghXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBcIkVuam95IVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG59KSh3aW5kb3cpO1xuIl19
