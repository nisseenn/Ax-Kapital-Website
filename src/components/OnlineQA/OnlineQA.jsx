const React = require('react');
import { PlusButton } from 'react-svg-buttons';
import { CloseButton } from 'react-svg-buttons';
import tjuefire from './img/e1.jpg'
import tjueni from './img/e2.jpg'
import otti from './img/e3.jpg'
const css = require('./css/OnlineQA.css')

var OnlineQA = React.createClass({

  getInitialState: function(){
    return{
      isButtonClicked: false
    };
  },

  handleOnClick: function(){
    this.setState({
      isButtonClicked: !this.state.isButtonClicked
    });

  },
  render: function() {
    var secondText = <p className={css.secondText}>For å forbedre markeds kunnskap om og forståelse for selskapets drift gjennom dialog. Q&A er en fremragende måte for å skape oppmerksomhet, interesse og engasjement på en enkel, effektiv og personlig måte. En representant fra deres virksomhet inngår en live skriftlig dialog med våres store investornettverk. Vårt team vil på forhånd markedsføre eventet og vil være tilgjengelig som moderator. </p>;
    var guideCircle = <div className={css.Guide} id="guide">
      <h1>Pris Q&A</h1>
      <div className={css.smallLine}></div><br />
        <div className={css.step}>
          <img className={css.icon} src={tjuefire} />
          <h2>Pris per Q&A</h2>

        </div>
        <div className={css.step}>
          <img className={css.icon} src={tjueni}/>
          <h2>Pris abonnement  6 mnd</h2>

        </div>
        <div className={css.step}>
          <img className={css.icon} src={otti}/>
          <h2>Pris abonnement  12 mnd</h2>
        </div>
      </div>;
    var actionButton = <CloseButton />;
    if (!this.state.isButtonClicked){
      secondText = "";
      actionButton = <PlusButton />
      guideCircle = "";
    }
    return <div className={css.AboutDropDown} id="about">
      <h1 className={css.firstText}>Online Q&A</h1>
    <br />
      {secondText}
      <br />
      {guideCircle}
      <br />
      <button className={css.buttonDown} onClick={this.handleOnClick}>
         <CloseButton className={this.state.isButtonClicked ? css.visible : css.hidden} />
         <PlusButton className={!this.state.isButtonClicked ? css.visible : css.hidden}/>
      </button>
    </div>
  }
});

module.exports = OnlineQA;
