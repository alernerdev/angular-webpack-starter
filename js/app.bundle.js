webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var app = angular.module('dashboard', []);
app.config(function($sceProvider) {
    // for this exercise, I am turning this off since I am mostly interested in the
    // bundling of code, not how the app works.
    $sceProvider.enabled(false);
});

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function YepNopeDirective() {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.check, function (val) {
        var words = val ? 'Yep' : 'Nope';
        element.text(words);
      });
    }
  }
}

angular.module('dashboard').directive('yepNope', YepNopeDirective);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


GithubStatusService.$inject = ['$http'];
function GithubStatusService($http) {
    var _this = this;
    _this.getStatus = function getStatus() {
        return $http({
            method: 'jsonp',
            url: 'https://status.github.com/api/status.json',
            transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
                return (value.status === 'good');
            })
        });
    }
}

angular.module('dashboard').service('GithubStatusService', GithubStatusService);

function appendTransform(defaults, transform) {
  defaults = angular.isArray(defaults) ? defaults : [defaults];
  return defaults.concat(transform);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


DashboardController.$inject = ['GithubStatusService'];
function DashboardController(gh) {
    var _this = this;
    _this.github = '';
    gh.getStatus().then(function(status) {
        _this.github = status;
    });
}

angular.module('dashboard').controller('dashboardController', DashboardController);

/***/ })
],[0]);