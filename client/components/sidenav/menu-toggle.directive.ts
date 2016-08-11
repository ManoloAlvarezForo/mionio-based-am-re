'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('mionioApp')
  .directive('menuToggle', function ($timeout, $animateCss, $mdSidenav, $mdMedia) {

    var link = function ($scope, $element, $attr, $ctrl) {
      var _el_ul = $element.find('ul');

      var getTargetHeight = function () {
        var _targetHeight;

        _el_ul.addClass('no-transition');
        _el_ul.css('height', '');

        _targetHeight = _el_ul.prop('clientHeight');

        _el_ul.css('height', 0);
        _el_ul.removeClass('no-transition');

        return _targetHeight;
      };

      if (!_el_ul) {
        return console.warn('ss-sidenav: `menuToggle` cannot find ul element');
      }

      $scope.$watch(function () {
        return $ctrl.isOpen($scope.section);
      }, function (open) {
        $timeout(function () {
          if (!$mdMedia('gt-sm') && !$mdSidenav('left').isOpen() && open) {
            return;
          }

          $animateCss(_el_ul, {
            from: {
              height: open ? 0 : (getTargetHeight() + 'px')
            },
            to: {
              height: open ? (getTargetHeight() + 'px') : 0
            },
            duration: 0.3
          }).start();
        }, 0, false);
      });
    };

    return {
      scope: {
        section: '='
      },
      templateUrl: 'components/sidenav/menu-toggle.tmpl.html',
      controller: 'MenuToggleController',
      controllerAs: 'menutoggle',
      link: link
    };
  });
