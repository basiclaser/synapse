'use strict';

var App = require('./App');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;


var Routes = (
  <Route handler={App}>
    <Route name="/" handler={App}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
