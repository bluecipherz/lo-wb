'use strict';

describe('Controller: ScolarshipCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var ScolarshipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScolarshipCtrl = $controller('ScolarshipCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScolarshipCtrl.awesomeThings.length).toBe(3);
  });
});
