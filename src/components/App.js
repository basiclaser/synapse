"use strict";
var React = require('react');
var Router = require('react-router');
var WritingArea = require("./WritingArea.js");
var Navbar = require("./Navbar.js");
var Index = require("./core/Synapse-Index.js");
var SynapseIntroduction = require("./core/Synapse-Introduction.js");
var SynapseGraph = require("./core/Synapse-Graph.js");
var SynapseStorage = require("./core/Synapse-Storage.js");
var coreArray = ["/index","/synapse-storage","/synapse-settings","/synapse-introduction","/synapse-graph"];
var Route = Router.Route;
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;
var State = Router.State;
var Link = Router.Link;

var App = React.createClass({
  mixins: [ Router.State ],
  render () {
    return (
      <div className="synapse-container">
      <Navbar route={this.getPath()} />
      <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route name="index" path="index" handler={Index}/>
    <Route name="synapse introduction" path="synapse introduction" handler={SynapseIntroduction}/>
    <Route name="synapse graph" path="synapse graph" handler={SynapseGraph}/>
    <Route name="synapse storage" path="synapse storage" handler={SynapseStorage}/>
    <Redirect from="/" to="index" />
    <Route path=":id" handler={WritingArea}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root params={State.params}/>, document.body);
});
