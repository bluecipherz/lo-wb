'use strict';

describe('Controller: ExamdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var ExamdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamdetailsCtrl = $controller('ExamdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExamdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
