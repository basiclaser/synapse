"use strict";
 
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;



var storageView = document.querySelector('.storage-view');
var storageAdd = document.querySelector('.storage-add');
var storageDelete = document.querySelector('.storage-delete');


var SynapseStorage = React.createClass({
  mixins: [ Router.State ],
  storageAdd : function(){
    var synapseJSON = prompt("please paste in your synapse JSON here","");
  },
  storageView : function(){
    var storageJSON = document.querySelector('.storage-JSON');
    if ( storageJSON.style.display != 'none' ) {
      storageJSON.style.display = 'none';
    }
    else {
      storageJSON.style.display = '';
    }
  },
  storageDelete : function(){
    var check = confirm("Are you sure you want to delete all of your notes?");
    if(check) {
      var doublecheck = prompt("To confirm delete, please type 'ab12cd34'.","");
      if(doublecheck === "ab12cd34") {
        alert("localStorage.clear();");
      } else {
        alert("Your notes were not deleted.");
      }
    }
  },
  render : function () {
    var name = this.getPath();
    var keys = Object.keys(localStorage);
    keys.push("/synapse-graph","/synapse-introduction","/synapse-settings","/synapse-storage");
    return (
      <div className="core-pages">
        <p>
          Import another valid JSON object into your notes. The new object's keys overwrite notes with the same names.
        </p>
        <button onClick={this.storageAdd} className="storage-add">Import</button>
        <p>
          Permanently delete all of your notes from this browser.
        </p>
        <button onClick={this.storageDelete} className="storage-delete">delete all</button>

        <div className="storage-JSON">
          <p>{JSON.stringify(localStorage)}</p>
        </div>
      </div>
    );
  }
});
 
module.exports = SynapseStorage; 