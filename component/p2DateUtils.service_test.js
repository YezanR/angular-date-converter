
'use strict';

describe('French -> english utils test', function() {
    
    var DateUtils;

    beforeEach(function(){
        angular.mock.module('p2DateConverter');
        
        inject(function(p2DateUtils){
            DateUtils = p2DateUtils;   
        });
        
    });

    it('has to convert 01/12/2017 to 2017-12-01 12:00:00', function() {
        
        // Set date
        var input = "01/12/2017";
        var convertedInput =  DateUtils.dateFrenchToEnglish(input);
        expect(convertedInput).toEqual('2017-12-01 12:00:00');
    
    })

    it('has to convert 02/02/2019 01:00:00 to 2019-02-02 01:00:00', function() {
        
        // Set date
        var input = "02/02/2019 01:00:00";
        var convertedInput =  DateUtils.dateFrenchToEnglish(input);
        expect(convertedInput).toEqual('2019-02-02 01:00:00');
    
    })

    it('has to accept english date 2019-02-02 01:00:00, no conversion to be done', function() {
        
        // Set date
        var input = "2019-02-02 01:00:00";
        var convertedInput =  DateUtils.dateFrenchToEnglish(input);
        expect(convertedInput).toEqual('2019-02-02 01:00:00');
    
    })

    it('has to accept english date 2019-02-02 01, no conversion to be done', function() {
        
        // Set date
        var input = "2019-02-02 01";
        var convertedInput =  DateUtils.dateFrenchToEnglish(input);
        expect(convertedInput).toEqual('2019-02-02 01');
    
    })

    it('has to accept english date 2019-02-02 01:35, no conversion to be done', function() {
        
        // Set date
        var input = "2019-02-02 01:35";
        var convertedInput =  DateUtils.dateFrenchToEnglish(input);
        expect(convertedInput).toEqual('2019-02-02 01:35');
    
    })

    it('has to accept english date 2019-02-02 01:35:55, no conversion to be done', function() {
        
        // Set date
        var input = "2019-02-02 01:35:55";
        var convertedInput =  DateUtils.dateFrenchToEnglish(input);
        expect(convertedInput).toEqual('2019-02-02 01:35:55');
    
    })

});

describe('English -> french utils test', function() {
    
    var DateUtils;

    beforeEach(function(){
        angular.mock.module('p2DateConverter');
        
        inject(function(p2DateUtils){
            DateUtils = p2DateUtils;   
        });
        
    });

    it('has to convert 2017-12-01 03:15:02 to 01/12/2017', function() {
        
        // Set date
        var input = "2017-12-01";
        var convertedInput =  DateUtils.dateEnglishToFrench(input);
        expect(convertedInput).toEqual('01/12/2017');
    
    })

});