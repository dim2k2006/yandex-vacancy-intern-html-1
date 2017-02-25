$(document).ready(function() {
    var burger = {
        body: $('body'),
        bodyPadding: 0,
        page: $('.promo, main, .footer'),
        burger: $('.burger'),
        mobileNavigation: $('.mobileNavigation'),
        container: $('.mobileNavigation__content'),
        navigation: $('.navigation__list'),
        positionTop: 0,
        active: false,

        setupListner: function() {
            var __this = this;

            this.burger.click(function(event) {
                event.preventDefault();

                if (!$(this).hasClass('active')) {
                    __this.open();
                } else {
                    __this.close();
                }
            });

            $(window).on('resize orientationchange', function () {
                if (__this.burger.css('display') === 'none' && __this.active) {
                    __this.close();
                }
            });
        },
        open: function() {
            var __this = this;

            this.active = true;

            this.positionTop = this.body.scrollTop();

            this.bodyPadding = this.body.css('padding-bottom');

            this.burger.addClass('active');

            this.mobileNavigation.fadeIn(200, function() {
                __this.page.wrapAll('<div class="pageWrapper">');

                __this.body.css({
                    'padding-bottom': 0
                })
                .addClass('mobileNavigationShow');
            });
        },
        close: function() {
            this.active = false;

            this.page.unwrap();

            this.body.css({
                'padding-bottom': this.bodyPadding
            })
            .removeClass('mobileNavigationShow');

            this.body.scrollTop(this.positionTop);

            this.burger.removeClass('active');

            this.mobileNavigation.fadeOut(200);
        },
        setup: function() {
            this.navigation.clone().appendTo(this.container);
        },
        init: function() {
            this.setup();
            this.setupListner();
        }
    };

    burger.init();
});
