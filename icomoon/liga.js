/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'office': '&#xe903;',
            'buildings': '&#xe903;',
            'file-text': '&#xe926;',
            'tags': '&#xe936;',
            'cart': '&#xe93a;',
            'purchase': '&#xe93a;',
            'coin-yen': '&#xe93e;',
            'money4': '&#xe93e;',
            'envelop': '&#xe945;',
            'mail': '&#xe945;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'clock2': '&#xe94f;',
            'time3': '&#xe94f;',
            'bubbles2': '&#xe96d;',
            'comments2': '&#xe96d;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'spinner3': '&#xe97c;',
            'loading4': '&#xe97c;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
            'lock': '&#xe98f;',
            'secure': '&#xe98f;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'fire': '&#xe9a9;',
            'flame': '&#xe9a9;',
            'bin': '&#xe9ac;',
            'trashcan': '&#xe9ac;',
            'clipboard': '&#xe9b8;',
            'board': '&#xe9b8;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'eye': '&#xe9ce;',
            'views': '&#xe9ce;',
            'eye-blocked': '&#xe9d1;',
            'views4': '&#xe9d1;',
            'star-empty': '&#xe9d7;',
            'rate': '&#xe9d7;',
            'star-half': '&#xe9d8;',
            'rate2': '&#xe9d8;',
            'star-full': '&#xe9d9;',
            'rate3': '&#xe9d9;',
            'heart': '&#xe9da;',
            'like': '&#xe9da;',
            'notification': '&#xea08;',
            'warning2': '&#xea08;',
            'question': '&#xea09;',
            'help': '&#xea09;',
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'minus': '&#xea0b;',
            'subtract': '&#xea0b;',
            'cross': '&#xea0f;',
            'cancel': '&#xea0f;',
            'checkmark': '&#xea10;',
            'tick': '&#xea10;',
            'arrow-up2': '&#xea3a;',
            'up2': '&#xea3a;',
            'arrow-left2': '&#xea40;',
            'left4': '&#xea40;',
            'checkbox-checked': '&#xea52;',
            'checkbox': '&#xea52;',
            'checkbox-unchecked': '&#xea53;',
            'checkbox2': '&#xea53;',
            'share2': '&#xea82;',
            'social': '&#xea82;',
            'sina-weibo': '&#xea9a;',
            'brand20': '&#xea9a;',
            'joomla': '&#xeab5;',
            'brand45': '&#xeab5;',
            'tux': '&#xeabd;',
            'brand52': '&#xeabd;',
            'yelp': '&#xead7;',
            'brand78': '&#xead7;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
