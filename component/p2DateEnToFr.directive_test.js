'use strict';

describe('english date converter', function() {

  var compile, scope, directiveElem;
  
  beforeEach(function(){
    angular.mock.module('p2DateConverter');
    
    inject(function($compile, $rootScope){
      compile = $compile;
      scope = $rootScope.$new();
    });
    
    directiveElem = getCompiledElement();
  });
  
  function getCompiledElement(){
    var element = angular.element('<input p2-date-en-to-fr ng-model="dateOfBirth" />');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  function setInput(value) {
    scope.dateOfBirth =  value;
    // Set date
    directiveElem.val(value);
    scope.$apply();
  }

  it('has to convert 2017-06-06 to french date', function() {

    // Set date
    setInput('2017-06-06');
    expect(directiveElem.val()).toEqual('06/06/2017');

  })

  it('has to convert 2017-08-06 03:15:00 to french date', function() {
    
        // Set date
        setInput('2017-08-06 03:15:00');
        expect(directiveElem.val()).toEqual('06/08/2017');
    
  })

  it('has to convert 2017-08-06 23:15 to french date', function() {
    
        // Set date
        setInput('2017-08-06 23:15');
        expect(directiveElem.val()).toEqual('06/08/2017');
    
  })

  it('has to detect 0000-00-00 00:00:00 as invalid date', function() {
    
        // Set date
        setInput('0000-00-00 00:00:00');
        expect(directiveElem.val()).toEqual('Invalid date');
    
  })

  it('has to convert 1993-12-09 00:00:00 to french date', function() {
    
      // Set date
      setInput('1993-12-09 00:00:00');
      expect(directiveElem.val()).toEqual('09/12/1993');
    
  })

  it('has to convert 1993-12-09 00:00:00 to french date', function() {
    
      // Set date
      setInput('1993-12-09 04');
      expect(directiveElem.val()).toEqual('09/12/1993');
    
  })

  it('has to accept already converted date ( 09/12/1993 )', function() {
    
      // Set date
      setInput('09/12/1993');
      expect(directiveElem.val()).toEqual('09/12/1993');
    
  })



});

