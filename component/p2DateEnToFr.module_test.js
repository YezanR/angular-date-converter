'use strict';

describe('p2DateConverter module', function () {
  beforeEach(module('p2DateConverter'));

  describe('version service', function () {
    it('should return current version', inject(function (version) {
      expect(version).toEqual('0.1');
    }));
  });
});
