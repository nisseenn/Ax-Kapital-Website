const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Team.css')

var Team = React.createClass({
  render: function() {
    return <div className={css.Team}>
      <h1>Teamet</h1>
        <div className={css.row}>
          <div className={css.pictures}>

        </div>
      </div>
    </div>
  }
});


module.exports = Team;
