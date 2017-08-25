'use strict';

describe('p2DateConverter.p2DateEnToFr module', function () {
  beforeEach(module('p2DateConverter.p2DateEnToFr'));

  describe('version service', function () {
    it('should return current version', inject(function (version) {
      expect(version).toEqual('0.1');
    }));
  });
});
