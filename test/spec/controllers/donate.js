'use strict';

describe('Controller: DonateCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var DonateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DonateCtrl = $controller('DonateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DonateCtrl.awesomeThings.length).toBe(3);
  });
});
