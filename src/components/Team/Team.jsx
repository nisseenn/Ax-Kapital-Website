const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Team.css')

var Team = React.createClass({
  render: function() {
    return <div className={css.Team}>
      <h1>Team</h1>
    </div>
  }
});


module.exports = Team;
