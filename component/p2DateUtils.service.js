
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
            //Check if it's already a french date, if so, then return the same input
            if ( moment(input, 'DD/MM/YYYY', true).isValid() 
                || moment(input, 'DD/MM/YYYY hh', true).isValid()
                || moment(input, 'DD/MM/YYYY hh:mm', true).isValid() 
                || moment(input, 'DD/MM/YYYY hh:mm:ss', true).isValid()) {
                return input; 
            } 
            return moment(input, 'YYYY-MM-DD hh:mm:ss').format('DD/MM/YYYY');
        }

        function dateFrenchToEnglish(input) {
            //Check if it's already an english date, if so, then return the same input
            if ( moment(input, 'YYYY-MM-DD', true).isValid() 
                || moment(input, 'YYYY-MM-DD hh', true).isValid()
                || moment(input, 'YYYY-MM-DD hh:mm', true).isValid() 
                || moment(input, 'YYYY-MM-DD hh:mm:ss', true).isValid()) {
                return input; 
            } 
            return moment(input, 'DD/MM/YYYY hh:mm:ss').format('YYYY-MM-DD hh:mm:ss');
        }

        return service;

    }

})();