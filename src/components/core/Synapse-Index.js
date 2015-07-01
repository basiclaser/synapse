"use strict";
 
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
 
var Index = React.createClass({
  mixins: [ Router.State ],
  render: function () {
    var name = this.getPath();
    var keys = Object.keys(localStorage);
    keys.push("/synapse graph","/synapse introduction","/synapse storage");
    return (
      <div className="core-pages">
        <ul className="core-pages-list">
          {keys.map(function(key, i) {
            return <li><Link key={i} to={key} className="core-pages-list-item">{key.substr(1)}</Link></li>;
          })}
        </ul>
      </div>
    );
  }
});
 
module.exports = Index; 