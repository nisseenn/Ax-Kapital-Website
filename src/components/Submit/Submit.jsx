const React = require('react');
import { connect } from 'react-redux'
import request from 'superagent'

import FiksyForm from '../FiksyForm/FiksyForm.jsx'

const css = require('./css/Submit.css')

var Submit = React.createClass({
  getInitialState: function(){
    return {
      name: "",
      email: "",
      finish: false
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
    }
  },
  handleSubmit: function(){
    request
      .post('/signup')
      .send({ name: this.state.name, email: this.state.email })
      .set('Accept', 'application/json')
      .end((function(err, res){
        console.log(res);
        this.setState({finish: true});
      }).bind(this));
  },
  render: function() {
    var currentContent = <span>
      <h1>Meld interesse</h1>
      <p>Registrer deg her hvis du som investor vil lære mer. Vi kommer til å sende deg mail med mer informasjon</p>
      <FiksyForm
        skeleton={["name", "email"]}
        bindings={[this.state.name, this.state.email]}
        placeholders={["Ditt navn", "Din email"]}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        submitLabel="Send"
      />
    </span>
    if (this.state.finish) {
      currentContent = <span>
        <h1 className={css.finish}>Interesse meldt</h1>
        <p>Vi syns det er spennende at du melder interesse! Vi vil sende deg en mail med mer informasjon</p>
      </span>
    }
    return <div className={css.Submit}>
      {currentContent}
    </div>
  }
});


module.exports = Submit;
