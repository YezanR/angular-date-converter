
(function() {
    
    'use strict';

    angular.module('p2DateConverter')
        .service('p2DateUtils', Utils);

    Utils.$inject = ['moment'];
    function Utils(moment) {

        var service = {
            dateEnglishToFrench: dateEnglishToFrench,
            dateFrenchToEnglish: dateFrenchToEnglish
        };

        function dateEnglishToFrench(input) {
            if ( moment(input, 'DD/MM/YYYY').isValid() ) {
                return moment(input, 'DD/MM/YYYY').format('DD/MM/YYYY'); 
            } 
            return moment(input, 'YYYY-MM-DD h:mm:ss').format('DD/MM/YYYY');
        }

        function dateFrenchToEnglish(input) {
            if ( moment(input, 'YYYY-MM-DD').isValid() ) {
                return moment(input, 'YYYY-MM-DD').format('YYYY-MM-DD h:mm:ss'); 
            } 
            return moment(input, 'DD/MM/YYYY h:mm:ss').format('YYYY-MM-DD h:mm:ss');
        }

        return service;

    }

})();