(function() {
	"use strict";

	angular.module('ddfw').directive('ddIcon', [
		'$compile',
		function($compile) {
			return {
				restrict : 'A',
				link     : function($scope, $element, $attrs) {
					$scope.icon = $attrs.ddIcon;

					var template = $compile('<span class="{{icon}}"></span>')($scope);
					$element.after(template);
				}
			};
		}
	]);
})();