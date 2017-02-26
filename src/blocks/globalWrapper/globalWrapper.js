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
        self.container = document.querySelector('.globalWrapper');
        self.aside = document.querySelector('aside');
        self.asideBottomLimit = parseInt(self.aside.getBoundingClientRect().bottom + window.pageYOffset);
        self.asideHidden = false;
        self.modules = app.modules;

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            window.addEventListener('scroll', self.scrollHandle);
        };

        /**
         * Handle scroll event
         */
        self.scrollHandle = function() {
            var scrollTop = window.pageYOffset;

            self.asideHidden = scrollTop > self.asideBottomLimit;

            if (self.asideHidden) {

                self.container.classList.add('globalWrapper_aside_hidden');

            } else {

                self.container.classList.remove('globalWrapper_aside_hidden');

            }
        };

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
            self.setupListener();
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.globalWrapper = new GlobalWrapper();

    app.modules.globalWrapper.init();
};

window.addEventListener('load', initApp);
