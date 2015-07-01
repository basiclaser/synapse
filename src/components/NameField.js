var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NameField = React.createClass({
    getInitialState: function() {
      return { NameFieldContents : document.querySelectorAll(".js-note-rename")};
    },
    onRename: function (contents) {
      //rewrite state and localstorage
      //localStorage.setItem(this.props.route, contents.target.value);
      //this.setState({note: contents.target.value});
      //IF EMPTY, CONFIRM DELETE
  //    if (contents.target.value.length == 0) {
  //      var deleteConfirmed = window.confirm("This note will be permanently deleted");
  //      if (deleteConfirmed) {
  //       localStorage.removeItem(this.props.route);
  //       this.transitionTo('/index');
  //      }   
  //    }
    },
    onRenameSave: function (contents) {        
        
    },
    render: function () {
        return (
          <input className="navbar-note-controls-rename js-note-rename" onChange={this.onRename(this.state.NameFieldContents)} defaultValue={this.props.route.substring(1)}></input>
        );

    }
});

module.exports = NameField;
