const React = require('react');
const css = require('./css/Hurtigevent.css')
import { PlusButton } from 'react-svg-buttons';
import { CloseButton } from 'react-svg-buttons';
import tjuefire from './img/yo.jpg'

var Hurtigevent = React.createClass({

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
    var secondText = <p className={css.secondText}>Ønsker dere å nå ut et budskap med umiddelbart virkning?
Bruken av Internett medfører at markedsaktørene krever og forventer at informasjon er tilgjengelig raskere enn for bare et par år siden. Antall henvendelser til selskapene per e-post øker kraftig, og kravene til responstid er timer.
Gjennom denne tjenesten får dere viktig informasjon ut offentlig til kapitalmarkedet umiddelbart hvor dere kan føre to-veis kommunikasjon. Dermed reduseres også antall enkelthenvendelser</p>;
    var guidePic = <div className={css.Guide} id="guide">
      <h1>Pris per event</h1>
      <div className={css.smallLine}></div><br />
        <div className={css.step}>
          <img className={css.icon} src={tjuefire} />
          <h2>eks mva</h2>
        </div>
      </div>;
    var actionButton = <CloseButton />;
    if (!this.state.isButtonClicked){
      secondText = "";
      actionButton = <PlusButton />
      guidePic = "";
    }
    return <div className={css.AboutDropDown} id="about">
      <h1 className={css.firstText}>Hurtigevent</h1>
    <br />
      {secondText}
      <br />
      {guidePic}
    <br />
      <button className={css.buttonDown} onClick={this.handleOnClick}>
         <CloseButton className={this.state.isButtonClicked ? css.visible : css.hidden} />
         <PlusButton className={!this.state.isButtonClicked ? css.visible : css.hidden}/>
      </button>
    </div>

  }
});


module.exports = Hurtigevent;
