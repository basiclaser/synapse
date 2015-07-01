"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Container = React.createClass({
  mixins: [ Router.State ],
  getInitialState: function(){
    var route = this.getPath();
    var URL = location;
    var storedNote = (localStorage.getItem(route) || "");
      return ({
          note: storedNote,
      });
  },
  handleChange: function(event) {
    var route = this.getPath();
    localStorage.setItem(route, event.target.value);
    this.setState({note: event.target.value});
  },
  componentDidMount: function() {
    //FOCUS IN TEXTAREA
  },
  render: function () {
    return (
      <textarea className="writing-area" defaultValue={this.state.note} onChange={this.handleChange}></textarea>
    );
  }
});

module.exports = Container; 
