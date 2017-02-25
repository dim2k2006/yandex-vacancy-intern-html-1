/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-csstransitions-touchevents !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var f in y)if(y.hasOwnProperty(f)){if(e=[],t=y[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var a,f,u,l,p="modernizr",d=i("div"),c=s();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:p+(r+1),d.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+p,(c.fake?c:d).appendChild(a),c.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),f=n(d,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=l,_.offsetHeight):d.parentNode.removeChild(d),!!f}function f(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?l(o,n||t):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,s){function a(){p&&(delete j.style,delete j.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=c(e,o);if(!r(l,"undefined"))return l}for(var p,d,m,h,v,y=["modernizr","tspan","samp"];!j.style&&y.length;)p=!0,j.modElem=i(y.shift()),j.style=j.modElem.style;for(m=e.length,d=0;m>d;d++)if(h=e[d],v=j.style[h],f(h,"-")&&(h=u(h)),j.style[h]!==n){if(s||r(o,"undefined"))return a(),"pfx"==t?h:!0;try{j.style[h]=o}catch(g){}if(j.style[h]!=v)return a(),"pfx"==t?h:!0}return a(),!1}function h(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+k.join(s+" ")+s).split(" "),p(a,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],w=g._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];g._prefixes=w;var S="CSS"in e&&"supports"in e.CSS,x="supportsCSS"in e;Modernizr.addTest("supports",S||x);var _=t.documentElement,b="svg"===_.nodeName.toLowerCase(),z=g.testStyles=a;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(r,function(e){n=9===e.offsetTop})}return n});var T="Moz O ms Webkit",P=g._config.usePrefixes?T.split(" "):[];g._cssomPrefixes=P;var k=g._config.usePrefixes?T.toLowerCase().split(" "):[];g._domPrefixes=k;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var j={style:E.elem.style};Modernizr._q.unshift(function(){delete j.style}),g.testAllProps=h,g.testAllProps=v,Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in _.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",v("transition","all",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);

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
         * Detect client features support and add class to html
         */
        self.featuresDetect = function() {
            if (Modernizr.touchevents) {

                self.html.addClass('js_touch');

            }
        };

        /**
         * Init module
         */
        self.init = function() {
            self.initModules();
            self.featuresDetect();
        };
    };

    if (!('modules' in $)) {
        $.modules = {};
    }

    $.modules.main = new Main();

    $.modules.main.init();
});
