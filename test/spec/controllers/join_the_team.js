'use strict';

describe('Controller: JoinTheTeamCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var JoinTheTeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JoinTheTeamCtrl = $controller('JoinTheTeamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JoinTheTeamCtrl.awesomeThings.length).toBe(3);
  });
});
