const React = require('react');
import { PlusButton } from 'react-svg-buttons';

const css = require('./css/About.css')

var About = React.createClass({

getInitialState: function(){
  return{
    isButtonClicked: false
  };
},

handleOnClick: function(){
  this.setState({
    isButtonClicked: true
  });
},
  render: function() {
    return <div className={css.About} id="about">
      <h1>Om djfhakdfhasdk</h1>
    <p className={css.firstText}>fasdfauisfaisdfg
    </p>
    <p className={css.secondText}>
      blashadfasdfhasodhfad
    </p>
    <br />
    <button className={css.buttonDown} onClick={this.handleOnClick}>
    <PlusButton />
  </button>
  </div>
  }
});

module.exports = About;
