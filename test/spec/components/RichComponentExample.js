'use strict';

describe('RichComponentExample', function () {
  var React = require('react/addons');
  var RichComponentExample, component;

  beforeEach(function () {
    RichComponentExample = require('components/RichComponentExample.js');
    component = React.createElement(RichComponentExample);
  });

  it('should create a new instance of RichComponentExample', function () {
    expect(component).toBeDefined();
  });
});
