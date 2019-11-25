var app = angular.module('formApp', []);

	app.controller('FormController', function($scope) {
		$scope.review= {};

		$scope.save= function(emp) {
			$scope.review= angular.copy(emp);
		};

		$scope.reset = function() {
			$scope.emp = angular.copy($scope.review);
		};

		$scope.reset();
	});
