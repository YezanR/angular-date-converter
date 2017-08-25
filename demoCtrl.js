
(function() {
    
    angular.module('p2DateConverter.dateEnToFr')
    .controller('DemoCtrl', DemoCtrl);

    function DemoCtrl($scope) {

        $scope.vm = {
            date: '2017-08-24 01:30:35'
        }
    }

})();