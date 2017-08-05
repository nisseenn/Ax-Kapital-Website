const React = require('react');
import request from 'superagent'
import FiksyForm from '../FiksyForm/FiksyForm.jsx'
import { Dropdown } from 'semantic-ui-react'
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
        this.setState({investor: value});
        break;
      case 1:
        this.setState({name: value});
        break;
      case 2:
        this.setState({email: value});
        break;
    }
  },
  handleSubmit: function(){
    request
      .post('/signup')
      .send({investor: this.state.investor, name: this.state.name, email: this.state.email })
      .set('Accept', 'application/json')
      .end((function(err, res){
        console.log(res);
        this.setState({finish: true});
      }).bind(this));
  },
  render: function() {
    var currentContent = <span>
      <h1>Meld interesse</h1>
      <p>Enten du er kapitalsøkende eller investor er det helt kostnadsfritt og uforpliktende å registrere seg. Vi sender mer informasjon på e-mail etter registrering.</p>

      <FiksyForm
        skeleton={["investor", "name", "email"]}
        bindings={[this.state.investor, this.state.name, this.state.email]}
        placeholders={["Investor/Grunder", "Ditt navn", "Din email"]}
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
    return <div className={css.Submit} id="submit">
      {currentContent}
    </div>
  }
});


module.exports = Submit;
