'use strict';

describe('Controller: CollegeProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var CollegeProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollegeProfileCtrl = $controller('CollegeProfileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollegeProfileCtrl.awesomeThings.length).toBe(3);
  });
});
