
(function () {
  'use strict';

  angular
      .module('p2DateConverter.p2DateEnToFr')
      .directive('p2DateEnToFr', DateEnToFr);

    DateEnToFr.$inject = ['moment'];
    function DateEnToFr (moment) {

        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {

                modelCtrl.$formatters.push(function(value) {

                    if ( value )
                    {
                        return moment(value, 'YYYY-MM-DD h:mm:ss').format('DD/MM/YYYY');
                    }

                });

            }
        };
    }
    
})();