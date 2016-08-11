'use strict';

angular.module('mionioApp.angular-material-sidenav', [
    'mionioApp.auth',
    'ui.router'
]).provider('ssSideNavSections', function SSSideNavSectionsProvider() {
    var _sections = [],
        _theme,
        _palettes;

    this.initWithSections = function (value) {
        _sections = value ? value : [];
    };

    this.initWithTheme = function (value) {
        _theme = value.theme();
        _palettes = value._PALETTES;
    };

    this.$get = [function ssSideNavSectionsFactory() {
        var SSSideNavSections = function () {
            this.sections = _sections;
            this.theme = _theme;
            this.palettes = _palettes;
        };

        return new SSSideNavSections();
    }];
});
