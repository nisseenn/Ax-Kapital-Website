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
    var secondText = <p className={css.secondText}>De gamle metoder med analyser fra meglerhus, avisoppslag og børsmeldinger fungerer dårlig. Der dere også søker å ha web-presentasjoner, telefonkonferanser og å ha presentasjoner i regi meglerhus – med svært begrenset oppmerksomhet. Det som imidlertid fungerer er tilgang til og oppmerksomhet fra en gruppering på sosialt media bestående av over 30.000 aktive norske investorer. Vi hjelper dere med synliggjøring av selskapet og dets verdier og strategi der du bestemmer budskapet og der du kan agere umiddelbart. Raskere, enklere og mer effektivt enn den gamle metoden.
    <br />
    <br />
    Ax Kapital tilbyr norske bedrifter den mest effektive eksponeringen overfor kapitalmarkedet i dag. Vi som står bak tilbudet har lang erfaring fra investorsiden, meglerhus og fra styreposisjoner i børsnoterte selskap og kombinerer dette med markedets beste kunnskap om hvordan investormiljøet fungerer på sosiale media og ekspertise i oppbygging av slike investornettverk. Vi vet hva som skal til for å få oppmerksomhet.

</p>;
    var actionButton = <CloseButton />;
    var readMore = <p></p>;
    if (!this.state.isButtonClicked){
      secondText = "";
      actionButton = <PlusButton />
      readMore ="Les mer";
    }
    return <div className={css.AboutDropDown} id="about">
      <h1>Om axkapital</h1>
      <p className={css.firstText}>Der er stadig vanskeligere for selskapene å være synlig i kapitalmarkedet – til ulempe for aksjonærer og selskap.</p>
      <br />
      {secondText}
      <br />
      {readMore}
      <br />
      <button className={css.buttonDown} onClick={this.handleOnClick}>
         <CloseButton className={this.state.isButtonClicked ? css.visible : css.hidden} />
         <PlusButton className={!this.state.isButtonClicked ? css.visible : css.hidden}/>
      </button>
    </div>

  }
});

module.exports = About;
