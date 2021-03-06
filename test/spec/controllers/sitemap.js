'use strict';

describe('Controller: SitemapCtrl', function () {

  // load the controller's module
  beforeEach(module('loWbApp'));

  var SitemapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SitemapCtrl = $controller('SitemapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SitemapCtrl.awesomeThings.length).toBe(3);
  });
});
