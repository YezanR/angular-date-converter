# angular-date-converter
A AngularJS package delivering directive to convert a date before passing it to ngModel 

### Installation

    bower install YezanR/angular-date-converter

In your `index.html` include the following scripts:

    <script src="bower_components/moment/moment.js"></script>
    <script src="bower_components/angular-moment/angular-moment.min.js"></script>
    <script src="bower_components/date-converter/dist/p2DateEnToFr.min.js"></script>

Inject the dependecy module:

    angular.module('demo', ['p2DateConverter.p2DateEnToFr']);

### Usage

If you wish to convert a date from french to english of an input, use can add the 'p2-date-en-to-fr' directive:

    <input type="text" ng-model="user.date_of_birth" p2-date-en-to-fr >

This would convert the date to french format before binding it to the model