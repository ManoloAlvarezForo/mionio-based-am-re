'use strict';

angular.module('mionioApp')
    .config(function (ssSideNavSectionsProvider, $mdThemingProvider) {
        ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
        ssSideNavSectionsProvider.initWithSections([{
            id: 'toogle_1',
            name: 'Section Heading 1',
            type: 'heading',
            children: [{
                name: 'Mesas',
                type: 'toggle',
                pages: [{
                    id: 'toogle_1_link_1',
                    name: 'Mesa 1',
                    state: 'order'
                }, {
                        id: 'toogle_1_link_2',
                        name: 'item 2',
                        state: 'common.toggle1.item2',
                        hidden: true
                    }, {
                        id: 'toogle_1_link_3',
                        name: 'item 3',
                        state: 'common.toggle1.item3'
                    }]
            }]
        }, {
                id: 'link_1',
                name: 'Link 1 ',
                state: 'common.link1',
                type: 'link',
                icon: 'fa fa-check'
            }, {
                id: 'link_2',
                name: 'Link 2',
                state: 'common.link2',
                type: 'link'
            }, {
                id: 'link_3',
                name: 'Link 3',
                state: 'common.link3',
                type: 'link',
                hidden: true
            }, {
                id: 'toogle_2',
                name: 'Section Heading 2',
                type: 'heading',
                children: [{
                    name: 'Toogle 2',
                    type: 'toggle',
                    pages: [{
                        id: 'toogle_2_link_1',
                        name: 'item 1',
                        state: 'common.toggle2.item1'
                    }]
                }]
            }]);
    });
