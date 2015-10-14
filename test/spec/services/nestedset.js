'use strict';

describe('Service: nestedSet', function () {

  // load the service's module
  beforeEach(module('loWbApp'));

  // instantiate service
  var nestedSet;
  beforeEach(inject(function (_nestedSet_) {
    nestedSet = _nestedSet_;
  }));

  it('should do something', function () {
    expect(!!nestedSet).toBe(true);
  });

});
