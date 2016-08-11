'use strict';

angular.module('mionioApp')
    .factory('ssSideNav', function ($rootScope,
        $location,
        $state,
        $stateParams,
        ssSideNavSections,
        ssSideNavSharedService) {
        var self,
            sections = ssSideNavSections.sections;

        var matchPage = function (section, page, newState) {
            var toState = newState ? newState.toState : null;

            if (!toState) {
                return console.warn('ss-sidenav: `toState` key not found');
            }

            if (toState.name !== page.state) {
                return;
            }

            if (!self) {
                console.warn('ss-sidenav: strange `self` is undef');
                return;
            }

            self.selectSection(section);
            self.selectPage(section, page);
        };

        var onStateChangeStart = function (event, toState, toParams) {
            var newState = {
                toState: toState,
                toParams: toParams
            };

            sections.forEach(function (section) {
                if (section.children) {
                    section.children.forEach(function (child) {
                        if (child.pages) {
                            child.pages.forEach(function (page) {
                                matchPage(child, page, newState);
                            });
                        } else if (child.type === 'link') {
                            matchPage(child, child, newState);
                        }
                    });
                } else if (section.pages) {
                    section.pages.forEach(function (page) {
                        matchPage(section, page, newState);
                    });
                } else if (section.type === 'link') {
                    matchPage(section, section, newState);
                }
            });
        };

        self = {
            sections: sections,
            forceSelectionWithId: function (id) {
                ssSideNavSharedService.broadcast('SS_SIDENAV_FORCE_SELECTED_ITEM', id);
            },
            selectSection: function (section) {
                self.openedSection = section;
            },
            toggleSelectSection: function (section) {
                self.openedSection = (self.openedSection === section) ? null : section;
            },
            isSectionSelected: function (section) {
                return self.openedSection === section;
            },
            selectPage: function (section, page) {
                self.currentSection = section;
                self.currentPage = page;
            },
            isPageSelected: function (page) {
                return self.currentPage ? self.currentPage.state === page : false;
            },
            setVisible: function (id, value) {
                if (!Array.prototype.every) {
                    // TODO prototyp for every,
                    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every;
                    return console.error('every funct not implemented');
                }

                self.sections.every(function (section) {
                    if (section.id === id) {
                        section.hidden = !value;
                        return false;
                    }

                    if (section.children) {
                        section.children.every(function (child) {
                            if (child.id === id) {
                                child.hidden = !value;
                                return false;
                            };

                            if (child.pages) {
                                child.pages.every(function (page) {
                                    if (page.id === id) {
                                        page.hidden = !value;
                                        return false;
                                    }

                                    return true;
                                });
                            }

                            return true;
                        });
                    }

                    return true;
                });
            },
            setVisibleFor: function (ids) {
                if (!Array.prototype.every) {
                    // TODO prototyp for every,
                    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every;
                    return console.error('every funct not implemented');
                }

                ids.forEach(function (id) {
                    self.setVisible(id.id, id.value);
                });
            }
        };

        $rootScope.$on('$stateChangeStart', onStateChangeStart);

        onStateChangeStart(null, $state.current, $stateParams);

        return self;
    });
