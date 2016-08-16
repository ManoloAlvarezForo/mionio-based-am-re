'use strict';

angular.module('mionioApp')
.factory('NotifyingService', function($rootScope) {
    return {
        subscribe: function(scope, callback) {
            var handler = $rootScope.$on('notifying-service-event', callback);
            scope.$on('$destroy', handler);
        },

        notify: function(title) {
            $rootScope.$emit('notifying-service-event', title);
        }
    };
});
