const React = require('react');
const css = require('./css/Tjenester.css')
import { PlusButton } from 'react-svg-buttons';
import { CloseButton } from 'react-svg-buttons';
import MediaQuery from 'react-responsive';
import tjuefire from './img/q1.jpg'
import tjueni from './img/q2.jpg'
import otti from './img/q3.jpg'
var Tjenester = React.createClass({

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
    var secondText = <p className={css.secondText}>Vi hjelper dere med å holde online presentasjon på våre plattformer  enten ved fremleggelse av års- og kvartalsregnskap, eller ved ulike temapresentasjoner av delvirksomheter, oppkjøp og fusjoner etc. Med over 30.000 private- og profesjonelle investorer i medlemsmassen vil dere forbedre markedskunnskap om og forståelse for deres selskapets drift. Presentasjonen vil foregå på våre plattformer gjennom screencast, webcast eller audiocast. Vårt team vil på forhånd markedsføre presentasjonen, samt være tilgjengelig for under eventet for moderering.
    </p>;
    var readMore = <p></p>;
    var guidePrice = <div className={css.Guide} id="guide">
      <h1>Priser finansiell høring</h1>
      <div className={css.smallLine}></div><br />
        <div className={css.step}>
          <img className={css.icon} src={tjuefire} />
          <h2>Pris per event presentasjon</h2>

        </div>;
        <div className={css.step}>
          <img className={css.icon} src={tjueni}/>
          <h2>Pris abonnement  6 mnd</h2>

        </div>
        <div className={css.step}>
          <img className={css.icon} src={otti}/>
          <h2>Pris abonnement  12 mnd</h2>
        </div>
      </div>;

      var Prices = <div className={css.Prices}>
        <h1>Priser finansiell høring</h1>
              <p>Pris per event presentasjon: 9.995,-</p>
              <p>Pris abonnement 6 mnd (eks): 44.995,-</p>
              <p>Pris abonnement 12 mnd (eks): 99.995,-</p>
            </div>;

    var actionButton = <CloseButton />;
    if (!this.state.isButtonClicked){
      secondText = "";
      actionButton = <PlusButton />
      guidePrice = "";
      Prices = "";
      readMore="Les mer"
    }
    return <div className={css.AboutDropDown} id="about">
      <h1>Løsning og priser</h1>
      <h1 className={css.firstText}>Finansiell høring foran et stort publikum
</h1>
    <br />
      {secondText}
      <br />
      <MediaQuery query='(min-device-width: 1224px)'>
      {guidePrice}
    </MediaQuery>
    <MediaQuery query='(max-device-width: 1224px)'>
      {Prices}
    </MediaQuery>
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


module.exports = Tjenester;
