"use strict";
 
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
 
var SynapseStorage = React.createClass({
  mixins: [ Router.State ],
  render: function () {
    var name = this.getPath();
    var keys = Object.keys(localStorage);
    keys.push("/synapse-graph","/synapse-introduction","/synapse-settings","/synapse-storage");
    return (
      <div className="core-pages">
      <p>
      All your synapse notes in JSON:<br /><br />
      {JSON.stringify(localStorage)}
      </p>
      </div>
    );
  }
});
 
module.exports = SynapseStorage; 