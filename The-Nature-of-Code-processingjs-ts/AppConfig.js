/// <reference path="scripts/typings/processing.d.ts" />
require.config({
    baseUrl: 'assets/scripts/',
    paths: {
        //main libraries
        jquery: '../vendor/jquery/jquery-1.9.1',
        processing: 'scripts/processing/processing',
        //shortcut paths
        templates: '../templates',
        data: '../data',
        //require plugins
        text: '../vendor/require/text',
        tpl: '../vendor/require/tpl',
        json: '../vendor/require/json',
        hbs: '../vendor/require-handlebars-plugin/hbs'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});
//# sourceMappingURL=AppConfig.js.map