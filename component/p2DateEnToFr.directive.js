
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

  angular
      .module('p2DateConverter')
      .directive('p2DateEnToFr', DateEnToFr);

    DateEnToFr.$inject = ['p2DateUtils'];
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
    
})();