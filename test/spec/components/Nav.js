'use strict';

describe('Nav', function () {
  var React = require('react/addons');
  var Nav, component;

  beforeEach(function () {
    Nav = require('components/Nav.js');
    component = React.createElement(Nav);
  });

  it('should create a new instance of Nav', function () {
    expect(component).toBeDefined();
  });
});
