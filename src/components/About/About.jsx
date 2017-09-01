const React = require('react');
import { PlusButton } from 'react-svg-buttons';
import { CloseButton } from 'react-svg-buttons';

const css = require('./css/About.css')

var About = React.createClass({

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
    var secondText = <p className={css.secondText}>AX Kapital består i dag av tre av de største investorplattformene i Norge. Grunnet fokus åpen, kritisk og sosialt debatt er vi blitt attraktiv diskusjons plattform for aksjeinteresserte i Norge. På grunn av den store medlemsmassen og profesjonaliteten er vi blitt en attraktiv aktør også for våre kunder som ønsker eksponering overfor kapital markedet. Vi tilbyr innovative investor relation tjenester som skaper bro mellom våre kunder og kapital markedet
</p>;
    var actionButton = <CloseButton />;
    if (!this.state.isButtonClicked){
      secondText = "";
      actionButton = <PlusButton />
    }
    return <div className={css.AboutDropDown} id="about">
      <h1>Om axkapital</h1>
      <p className={css.firstText}>AX Kapital tilbyr tjenester innenfor Investor Relation og markedsføringsfunksjoner med nytenkende medieløsninger</p>
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

module.exports = About;
