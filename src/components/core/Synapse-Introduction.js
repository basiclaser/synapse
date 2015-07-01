"use strict";

var React = require('react');
var Router = require('react-router');

var SynapseIntroduction = React.createClass({
  mixins: [ Router.State ],
  render: function () {
    var name = this.getPath();
    return (
          <div className="writing-area">
            <p>
              Welcome to Synapse, an internet for your thoughts.</p>
            <p>
              You can create and link to new notes by typing a new path in the URL bar like synapse.io/example or using the # symbol. Here's an #example.
              click on the #example link.
            </p>
            <p>
              try making a link to a new note!</p>
            <p>
              You can group and categorise by creating notes full of links based on subject. 
              For example, you can make a note called #projects, and then store links to different projects in there.
            </p>
            <p>
              Click on index to see a list of all the notes you've made.</p>
            <p>
              synapse is a minimal, 'directed acyclic graph', holarchic wiki. The idea for it came when I got frustrated with other
              note-taking programs being too opinionated on how I should write and organise my thoughts. What I really wanted was to make
              a 'little internet' of my ideas and projects, where anything could link to anything else, so that's what synapse is. 
            </p>
            <p>
              Please give me any feedback you have at @basiclaser on twitter or github, or hello@synapse.io
            </p>
          </div>
    );
  }
});

module.exports = SynapseIntroduction; 
