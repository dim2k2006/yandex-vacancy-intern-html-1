var app = {};

var initApp = function() {
    if ('modules' in app && 'globalWrapper' in app.modules) {
        return;
    }

    /**
     * Creates a new GlobalWrapper class.
     * @class
     */
    var GlobalWrapper = function () {
        var self = this;

        self.html = document.querySelector('html');
        self.body = document.querySelector('body');
        self.modules = app.modules;

        /**
         * Init all modules in app.modules
         */
        self.initModules = function() {
            for (var module in self.modules) {

                if (self.modules.hasOwnProperty(module)) {

                    if (typeof self.modules[module].init !== 'undefined' && module !== 'globalWrapper') {

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

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.globalWrapper = new GlobalWrapper();

    app.modules.globalWrapper.init();
};

window.addEventListener('load', initApp);
