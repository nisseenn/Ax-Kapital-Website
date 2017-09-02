const React = require('react');
const css = require('./css/Irpakke.css')
import { PlusButton } from 'react-svg-buttons';
import { CloseButton } from 'react-svg-buttons';
import Guide from '../Guide/Guide.jsx'
import MediaQuery from 'react-responsive';

var Irpakke = React.createClass({

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
    var secondText = <p className={css.secondText}> IR-pakke er designet for å dekke deres investor relations behov. Denne pakken er bygget er bygget for å tjene to formål: Først og fremst å eksponere deres virksomhet og fortelling på en åpen, konsist og profesjonell måte for kapital markedet i Norge. Dernest å sikre at dere til enhver tid kan epsonere deres Equity Stories så vel som relevante nyheter til kapital markedet i Norge. Dermed kan dere opprettholde og forbedre god investor relations, sikre god aksjelikviditet, samt sikre de beste forutsetninger for å få dekke deres løpende behov, f.eks. i forbindelse med emisjoner, presse konferanse o.l..
</p>;
var secondsecondText = <p className={css.secondsecondText}>
  <h1 className={css.headerText}>Pakken inkluderer</h1>
<br /><li>Logo av bedriften på forsidebildet av våre investor fora.</li>
<li>Selskapspresentasjon</li>
<li>Finansiell høring av Kvartallsrapport og Årsrapport</li>
<li>Q&A hvert kvaral</li>
<li>Opptil 2 Hurtigevents i måneden</li>
</p>
    var guideOn = <Guide />;
    var Prices = <div className={css.Prices}>
      <h1>priser ir-pakke</h1>
            <p>Abonnement, 2 mnd: 24.995,-</p>
            <p>Abonnement, 3 mnd: 29.995,-</p>
            <p>Abonnement, 6 mnd: 49.995,-</p>
            <p>Abonnement, 12 mnd: 80.000,-</p>
          </div>;
    var actionButton = <CloseButton />;
    if (!this.state.isButtonClicked){
      secondText = "";
      secondsecondText = "";
      guideOn ="";
      actionButton = <PlusButton />
      Prices ="";
    }
    return <div className={css.AboutDropDown} id="about">
      <h1 className={css.firstText}>IR-Pakke</h1>
    <br />
      {secondText}
      <br />
      {secondsecondText}
      <MediaQuery query='(min-device-width: 1224px)'>
      {guideOn}
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        {Prices}
      </MediaQuery>
      <br />
      <button className={css.buttonDown} onClick={this.handleOnClick}>
         <CloseButton className={this.state.isButtonClicked ? css.visible : css.hidden} />
         <PlusButton className={!this.state.isButtonClicked ? css.visible : css.hidden}/>
      </button>
    </div>
  }
});


module.exports = Irpakke;
