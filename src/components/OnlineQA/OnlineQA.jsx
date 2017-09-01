const React = require('react');
import { PlusButton } from 'react-svg-buttons';
import { CloseButton } from 'react-svg-buttons';

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
    var actionButton = <CloseButton />;
    if (!this.state.isButtonClicked){
      secondText = "";
      actionButton = <PlusButton />
    }
    return <div className={css.AboutDropDown} id="about">
      <h1 className={css.firstText}>Online Q&A</h1>
    <br />
      {secondText}
      <br />
      <button className={css.buttonDown} onClick={this.handleOnClick}>
         <CloseButton className={this.state.isButtonClicked ? css.visible : css.hidden} />
         <PlusButton className={!this.state.isButtonClicked ? css.visible : css.hidden}/>
      </button>
    </div>
  }
});

module.exports = OnlineQA;
