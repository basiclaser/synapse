var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var NameField = require("./NameField.js");

var Navbar = React.createClass({
    mixins: [Router.State, Router.Navigation],
    onDelete: function () {
        var deleteConfirmed = window.confirm("This note will be permanently deleted");
        if (deleteConfirmed) {
            localStorage.removeItem(this.props.route);
            this.transitionTo('/index');
        }
    },
    render: function () {
        return (
            <div className="navbar">
                <div className="navbar-title-area">
                    <Link to="index" className="navbar-title-synapse">
                        <i>synapse</i>
                    </Link>
                    <div className="navbar-note-controls">
                        <NameField route={this.props.route}/>
                        <span className="navbar-note-controls-delete js-note-delete" onClick={this.onDelete}>delete</span>
                    </div>
                </div>
                <ul className="navbar-links-area">
                    <li className="navbar-links-area-link">note-1</li>
                    <li className="navbar-links-area-link">note-2</li>
                    <li className="navbar-links-area-link">note-3</li>
                    <li className="navbar-links-area-link">note-4</li>
                </ul>
            </div>

        );

    }
});

module.exports = Navbar;
