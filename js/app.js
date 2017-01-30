(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.cnt = 0;
  $scope.check = function () {
  	if ($scope.str == undefined || $scope.str.length == 0) {
  		$scope.answer = "Please enter data first" + $scope.str;
  	} else {
	  	$scope.cnt = $scope.str.split(",").length;
  		if ($scope.cnt <= 3) {
  			$scope.answer = "Enjoy!";
  		} else {
  			$scope.answer = "Too much!";
  		}
    };
    return $scope.answer;
  };
});

})();
