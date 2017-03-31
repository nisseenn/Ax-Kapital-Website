const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/{{ component_name }}.css')

var {{ component_name }} = React.createClass({
  {% if not presentational and component_state %}
  getInitialState: function(){
    return {
      format: "normal"
    }
  },
  {% endif %}
  render: function() {
    return <div className={css.{{ component_name }}}>
      {{ component_name }}
    </div>
  }
});

{% if presentational %}

module.exports = {{ component_name }};

{% else %}

const mapStateToProps = (state) => {
  return {
    list: "list"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    prompt: function() {
      alert("prompt");
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)({{ component_name }})

{% endif %}
