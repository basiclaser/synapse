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
  handleLink: function(content) {
    console.log("hello");
  },
  handleChange: function(event) {
    console.log("something changed");
    var route = this.getPath();
    var test = event.target.innerHTML;
    test = test.replace(/{{/g, "<span class='link' onClick='this.handleLink(this)'>");
    test = test.replace(/}}/g, "</span>");
    localStorage.setItem(route, test);
    this.setState({note: test});
  },
  componentDidMount: function() {
    document.querySelector(".writing-area").focus();
    document.querySelector(".writing-area").innerHTML = this.state.note;
  },
  render: function () {
    return (
      <div contentEditable className="writing-area" onChange={this.handleChange}></div>
    );
  }
});

module.exports = Container; 
