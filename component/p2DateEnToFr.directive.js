
/**
 * This directive intercpets the binding of data to the model and converts the date to a french date.
 * It is a sort of hook between data passed from the controller and the model.
 * Accpets an english or french date and convert it to french date.
 * 
 */
(function () {
    'use strict';

    function DateEnToFr (p2DateUtils) {

        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, modelCtrl) {

                modelCtrl.$formatters.push(function(value) {
                    
                    if ( value )
                    {
                        return p2DateUtils.dateEnglishToFrench(value, attrs.p2TimeFormat);
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