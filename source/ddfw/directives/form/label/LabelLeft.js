(function() {
	"use strict";

	angular.module('ddfw').directive('ddLabelLeft', [
		'$compile',
		function($compile) {
			return {
				restrict : 'A',
				link     : function($scope, $element, $attrs) {
					$scope.labelLeft = $attrs.ddLabelLeft;

					var template = $compile('<span class="input-addon label">{{labelLeft}}</span>')($scope);
					$element.parent()[0].insertBefore(angular.element(template)[0], $element[0]);
				}
			};
		}
	]);
})();