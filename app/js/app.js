(function () {
    'use strict';

    angular
        .module('app', [
            'ngStorage',
            'hc.marked',
            'angularMoment'
        ])
        .config(configure)
        .run(runBlock);

    /*
     * Configuration
     */
    configure.$inject = ['markedProvider'];

    function configure(markedProvider) {
        // Enabling Github Flavour Markdown and tables support
        markedProvider.setOptions({
            gfm   : true,
            tables: true
        });
    }

    /*
     * Run
     */
    runBlock.$inject = ['$localStorage', 'amMoment'];

    function runBlock($localStorage, amMoment) {
        // Set local storage default values
        $localStorage.$default({
            notes: []
        });

        // Set Moment.js locale
        amMoment.changeLocale('ru');
    }
})();