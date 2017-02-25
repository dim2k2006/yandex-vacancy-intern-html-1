(function () {
    if ('modules' in app && 'modal' in app.modules) {
        return;
    }

    /**
     * Creates a new Modal class.
     * @class
     */
    var Modal = function () {
        var self = this;

        self.html = '';
        self.body = '';
        self.container = document.querySelector('.modal');
        self.openButton = document.querySelector('.modal_trigger');
        self.closeButton = document.querySelector('.modal_close');

        /**
         * Add event listeners
         */
        self.setupListener = function() {
            self.openButton.addEventListener('click', self.open);
            self.closeButton.addEventListener('click', self.close);
        };

        self.open = function(event) {
            event.preventDefault();

            var target = this,
                src = target.getAttribute('href'),
                container = document.querySelector(src);

            self.html.classList.add('modal_state_open');
            container.classList.add('modal_state_open');
        };

        self.close = function(event) {
            event.preventDefault();

            var target = this,
                container = target.closest('.modal');

            container.classList.remove('modal_state_open');
            self.html.classList.remove('modal_state_open');
        };

        /**
         * Import properties from Main class
         */
        self.importDefaults = function() {
            self.html = app.modules.globalWrapper.html;
            self.body = app.modules.globalWrapper.body;
        };

        /**
         * Init module
         */
        self.init = function() {
            if (self.container) {

                self.importDefaults();
                self.setupListener();

            }
        };
    };

    if (!('modules' in app)) {
        app.modules = {};
    }

    app.modules.modal = new Modal();
})();
