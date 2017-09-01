const React = require('react');
const css = require('./css/Tjenester.css')
import { PlusButton } from 'react-svg-buttons';
import { CloseButton } from 'react-svg-buttons';


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
    var secondText = <p className={css.secondText}>Vi hjelper dere med å holde online presentasjon på våre plattformer  enten ved fremleggelse av års- og kvartalsregnskap, eller ved ulike temapresentasjoner av delvirksomheter, oppkjøpg og fusjoner etc. Med over 30.000 private- og profesjonelle investorer i medlemsmassen vil dere forbedre markedskunnskap om og forståelse for deres selskapets drift. Presentasjonen vil foregå på våre plattformer gjennom screencast, webcast eller audiocast. Vårt team vil på forhånd markedsføre presentasjonen, samt være tilgjengelig for under eventet for moderering.
    </p>;
    var actionButton = <CloseButton />;
    if (!this.state.isButtonClicked){
      secondText = "";
      actionButton = <PlusButton />
    }
    return <div className={css.AboutDropDown} id="about">
      <h1>Våre tjenester</h1>
      <h1 className={css.firstText}>Finansiell høring foran et stort publikum
</h1>
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


module.exports = Tjenester;
