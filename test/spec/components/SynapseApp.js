'use strict';

describe('SynapseApp', function () {
  var React = require('react/addons');
  var SynapseApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SynapseApp = require('components/SynapseApp.js');
    component = React.createElement(SynapseApp);
  });

  it('should create a new instance of SynapseApp', function () {
    expect(component).toBeDefined();
  });
});
