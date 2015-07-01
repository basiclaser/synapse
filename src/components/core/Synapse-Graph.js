"use strict";

var React = require('react');
var Router = require('react-router');

var SynapseGraph = React.createClass({
  mixins: [ Router.State ],
  render: function () {
    var name = this.getPath();
    return (
          <div className="core-pages">
          this is a graph. promise
          </div>
    );
  }
});

module.exports = SynapseGraph; 
