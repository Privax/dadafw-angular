(function() {
	"use strict";

	angular.module('ddfw').directive('ddLabelRight', [
		'$compile',
		function($compile) {
			return {
				restrict : 'A',
				link     : function($scope, $element, $attrs) {
					$scope.labelRight = $attrs.ddLabelRight;

					var template = $compile('<span class="input-addon label">{{labelRight}}</span>')($scope);
					$element.after(template);
				}
			};
		}
	]);
})();