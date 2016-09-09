'use strict';

angular.module('mionioApp')
.factory('SharedScope', function($rootScope) {
    var scope;
    return {
        addScope: function(newscope) {
            scope = newscope;
        },

        getScope: function() {
            return scope;
        },

        setControllerToScope: function(controller, controllerName) {
            scope[controllerName] = controller;
        }
    };
});
