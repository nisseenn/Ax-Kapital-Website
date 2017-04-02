const React = require('react');
import { connect } from 'react-redux'
import request from 'superagent'

import FiksyForm from '../FiksyForm/FiksyForm.jsx'

const css = require('./css/Submit.css')

var Submit = React.createClass({
  getInitialState: function(){
    return {
      name: "",
      email: ""
    }
  },
  handleChange: function(index, value){
    switch (index) {
      case 0:
        this.setState({name: value});
        break;
      case 1:
        this.setState({email: value});
        break;
      default:

    }
  },
  handleSubmit: function(){
    request
      .post('/signup')
      .send({ name: this.state.name, email: this.state.email })
      .set('Accept', 'application/json')
      .end(function(err, res){
        console.log(res);
      });
  },
  render: function() {
    return <div className={css.Submit}>
      <h1>Meld interesse</h1>
      <p>Ved å søke her medlder du interesse</p>
      <FiksyForm
        skeleton={["name", "email"]}
        bindings={[this.state.name, this.state.email]}
        placeholders={["Ditt navn", "Din email"]}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        submitLabel="Send"
      />
    </div>
  }
});


module.exports = Submit;
