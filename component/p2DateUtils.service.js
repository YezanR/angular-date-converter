
(function() {
    
    'use strict';

    angular.module('p2DateConverter')
        .service('p2DateUtils', Utils);

    Utils.$inject = ['moment'];
    function Utils(moment) {

        var service = {
            dateEnglishToFrench: dateEnglishToFrench
        };

        function dateEnglishToFrench(input) {
            if ( moment(input, 'DD/MM/YYYY').isValid() ) {
                return moment(input, 'DD/MM/YYYY').format('DD/MM/YYYY'); 
            } 
            return moment(input, 'YYYY-MM-DD h:mm:ss').format('DD/MM/YYYY');
        }

        return service;

    }

})();