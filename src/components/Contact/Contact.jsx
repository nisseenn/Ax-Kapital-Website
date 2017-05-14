const React = require('react');
import FacebookIcon from './img/facebook.png'

const css = require('./css/Contact.css')

var Contact = React.createClass({
  toFace: function() {
      window.open('https://www.facebook.com/groups/576624949213669/?fref=ts');
    },
  render: function() {
    return <div className={css.Contact} id="contact">
      <h1>Kontakt oss</h1>
          <div className={css.section}>
            <h1>Spørsmål som investor</h1>
              <div className={css.smallLine}></div><br />
            <p>Obaid.saleem@entrahost.com</p>
            <p>983423932</p>
          </div>
          <div className={css.section}>
            <h1>Spørsmål som GrÜnder</h1>
              <div className={css.smallLine}></div><br />
            <p>Berg.moe@entrahost.com</p>
            <p>983423932</p>
        </div>
        <div className={css.Facebook}>
          <h1>Du kan også finne oss her</h1>
          <a onClick={this.toFace}>
          <img src={FacebookIcon} className={css.logoStyle} ></img></a>
        </div>
    </div>
  }
});


module.exports = Contact;
