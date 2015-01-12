(function() {
	"use strict";

	angular.module('ddfw').directive('ddTag', [
		function() {
			return {
				restrict   : 'E',
				transclude : true,
				scope      : {
					"ddMeta"   : '@?',
					"ddRemove" : '=?'
				},
				template   : '<span class="tag" ng-class="{removable: removable}">'
				           + '<span ng-transclude></span>'
				           + '<span class="remove" ng-if="removable" ng-click="ddRemove()"></span>'
				           + '</span>',
				link       : function($scope, $element, $attrs) {
					$scope.removable = $attrs.hasOwnProperty('ddRemovable');

					$scope.ddRemove = function() {
						$scope.$emit('dd-tag.remove', $scope.ddMeta);
						console.log('dd-tag.remove', $scope.ddMeta);
						$element.remove();
					};
				}
			};
		}
	]);
})();