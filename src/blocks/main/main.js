$(document).ready(function() {
    if ('modules' in $ && 'main' in $.modules) {
        return;
    }

    /**
     * Creates a new Main class.
     * @class
     */
    var Main = function () {
        var self = this;

        self.window = $(window);
        self.html = $('html');
        self.body = $('body');
        self.modules = $.modules;

        /**
         * Init all modules in $.modules
         */
        self.initModules = function() {
            for (var module in self.modules) {

                if (self.modules.hasOwnProperty(module)) {

                    if (typeof self.modules[module].init !== 'undefined' && module !== 'main') {

                        self.modules[module].init();

                    }

                }

            }
        };

        /**
         * Init module
         */
        self.init = function() {
            self.initModules();
        };
    };

    if (!('modules' in $)) {
        $.modules = {};
    }

    $.modules.main = new Main();

    $.modules.main.init();
});
