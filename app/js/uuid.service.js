(function () {
    'use strict';

    angular
        .module('app')
        .service('uuidService', uuidService);

    function uuidService() {
        return generate;

        ///

        function s4() {
            return Math
                .floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        function generate() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    }
})();