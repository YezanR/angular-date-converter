
(function() {
    
    'use strict';

    function Utils(moment) {
        
        var frenchFormat = 'DD/MM/YYYY';
        var englishFormat = 'YYYY-MM-DD HH:mm:ss';

        function dateEnglishToFrench(input) {
            //Check if it's already a french date
            if ( moment(input, 'DD/MM/YYYY', true).isValid() ||
                moment(input, 'DD/MM/YYYY HH', true).isValid() || 
                moment(input, 'DD/MM/YYYY HH:mm', true).isValid() ||
                moment(input, 'DD/MM/YYYY HH:mm:ss', true).isValid()) {
                return moment(input, 'DD/MM/YYYY HH:mm:ss').format(frenchFormat);
            } 
            return moment(input, 'YYYY-MM-DD HH:mm:ss').format(frenchFormat);
        }

        function dateFrenchToEnglish(input) {
            //Check if it's already an english date, if so, then return the same input
            if ( moment(input, 'YYYY-MM-DD', true).isValid() ||
                 moment(input, 'YYYY-MM-DD HH', true).isValid() ||
                moment(input, 'YYYY-MM-DD HH:mm', true).isValid() ||
                moment(input, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
                return moment(input, 'YYYY-MM-DD HH:mm:ss').format(englishFormat);
            } 
            return moment(input, 'DD/MM/YYYY hh:mm:ss').format(englishFormat);
        }

        var service = {
            dateEnglishToFrench: dateEnglishToFrench,
            dateFrenchToEnglish: dateFrenchToEnglish
        };

        return service;

    }

    angular.module('p2DateConverter')
        .service('p2DateUtils', Utils);

    Utils.$inject = ['moment'];
    

})();