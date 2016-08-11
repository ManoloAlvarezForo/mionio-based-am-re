'use strict';

angular.module('mionioApp')
    .factory('ssSideNavSharedService', function ($rootScope) {
        var _sharedService = {};

        _sharedService.broadcast = function (eventName, eventData) {
            $rootScope.$broadcast(eventName, eventData);
        };

        _sharedService.emit = function (eventName, eventData) {
            $rootScope.$emit(eventName, eventData);
        };

        return _sharedService;
});
