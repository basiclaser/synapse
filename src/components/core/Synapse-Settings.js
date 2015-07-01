"use strict";

var React = require('react');
var Router = require('react-router');

var SynapseSettings = React.createClass({
  mixins: [ Router.State ],
  render: function () {
    var name = this.getPath();
    return (
        <div className="core-pages">
          <p>Welcome to settings</p>
          <ul className="core-pages-list">
            <li>background color:</li>
            <li>text color:</li>
            <li>link color:</li>
            <li>font-size:</li>
          </ul>
        </div>
    );
  }
});

module.exports = SynapseSettings; 
