'use strict';

describe('Controller: CollegeListCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var CollegeListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollegeListCtrl = $controller('CollegeListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollegeListCtrl.awesomeThings.length).toBe(3);
  });
});
