
(function() {

    'use strict';

    function frenchDate(p2DateUtils) {
        return function(input) {

            if ( input ) {
                return p2DateUtils.dateEnglishToFrench(input);
            }
            else {
                return '';
            }
        };
    }
    
    angular.module('p2DateConverter')
        .filter('frenchDate', frenchDate);
    
    frenchDate.$inject = ['p2DateUtils'];

})();