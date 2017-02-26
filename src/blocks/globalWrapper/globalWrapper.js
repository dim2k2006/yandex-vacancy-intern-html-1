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
        self.main = document.querySelector('.main');
        self.mainHeight = self.main.offsetHeight;
        self.aside = document.querySelector('.aside');
        self.asideBottomLimit = parseInt(self.aside.getBoundingClientRect().bottom + window.pageYOffset);
        self.asideHidden = false;
        self.modules = app.modules;

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            window.addEventListener('scroll', self.scrollHandle);
            self.main.addEventListener('transitionend', self.handlePosition);
        };

        /**
         * Keep focus after aside has ben closed
         * @param {Object} event
         */
        self.handlePosition = function(event) {
            if (event.propertyName === 'width') {

                var height = self.main.offsetHeight,
                    offset = 0;

                if (self.asideHidden) {

                    offset = self.mainHeight - height;

                    self.main.style.marginTop = offset + 'px';

                    window.scrollBy(0, offset / 2);

                } else {

                    offset = parseInt(self.main.style.marginTop);

                    self.main.style.marginTop = '0px';

                    window.scrollBy(0, offset * (-1));

                }

            }
        };

        /**
         * Handle scroll event
         */
        self.scrollHandle = function() {
            var scrollTop = window.pageYOffset;

            self.asideHidden = scrollTop > self.asideBottomLimit;

            if (self.asideHidden) {

                self.hideAside();

            } else {

                self.showAside();

            }
        };

        /**
         * Hide aside
         */
        self.hideAside = function() {
            if (!self.container.classList.contains('globalWrapper_aside_hidden')) {

                self.container.classList.add('globalWrapper_aside_hidden');
            }
        };

        /**
         * Show aside
         */
        self.showAside = function() {
            if (self.container.classList.contains('globalWrapper_aside_hidden')) {

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
