/*!
 * See LICENSE in this repository for license information
 */
(function(){
(function () {
  'use strict';

  angular
      .module('p2DateConverter', ['angularMoment'])
      .value('version', '0.1');
  
})();


/**
 * This directive intercpets the binding of data to the model and converts the date to a french date.
 * It is a sort of hook between data passed from the controller and the model.
 * Accpets an english or french date and convert it to french date.
 * 
 * Note: Accepts a date format, if it's valid then it will ignore any content that comes after the date
 * 
 * For example:  
 *      '2017-07-07' -> valid input 
 *      '2017-07-07 dummy string' -> valid input    
 *      '07/07/2017' -> valid input
 *      '07/07/2017 23:40' -> valid input    
 *      '07/07/2017 aassdsdsdsd' -> valid input
 *      '2017-222-111' -> Not a valid input    
 */
(function () {
    'use strict';

    function DateEnToFr (p2DateUtils) {

        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {

                modelCtrl.$formatters.push(function(value) {
                    
                    if ( value )
                    {
                        return p2DateUtils.dateEnglishToFrench(value);
                    }

                });

            }
        };
    }

    angular
        .module('p2DateConverter')
        .directive('p2DateEnToFr', DateEnToFr);

    DateEnToFr.$inject = ['p2DateUtils'];
    
    
})();

(function() {
    
    'use strict';

    function Utils(moment) {
        
        var frenchFormat = 'DD/MM/YYYY HH:mm:ss';
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
})();