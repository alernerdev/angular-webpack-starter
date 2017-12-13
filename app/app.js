var app = angular.module('dashboard', []);
app.config(function($sceProvider) {
    // for this exercise, I am turning this off since I am mostly interested in the
    // bundling of code, not how the app works.
    $sceProvider.enabled(false);
});

require('./directives/yep-nope.directive');
require('./services/github-status.service');
require('./controllers/dashboard.controller');