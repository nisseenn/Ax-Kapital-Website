const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Guide.css')

var Guide = React.createClass({
  render: function() {
    return <div className={css.Guide}>
      <h1>Slik er prosessen</h1>
        <div class="step1">

        </div>
    </div>
  }
});


module.exports = Guide;
