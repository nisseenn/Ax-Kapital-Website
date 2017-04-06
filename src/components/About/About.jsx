const React = require('react');


const css = require('./css/About.css')
import coffe from "./img/coffe.png"

var About = React.createClass({
  render: function() {
    return <div className={css.About}>
      <img src={coffe} />
      <h1>Om engleinvestor</h1>
      <p>Er du interessert i oppstartsselskaper? Med Engleinvestor kan du enkelt få innsikt i de forskjellige selskapene gjennom presentasjoner på et eget nettsted. I samarbeid med Seed Forum, Aksjeforum og Gründerforum sørger vi for at du får seriøse og velinformerende selskapspresentasjoner. I tillegg sørger vi for at selskapene er godt forberedt gjennom onlinekurset til Seed Forum, slik at du som investor for en best mulig pitch. Ved interesse blir du som investor invitert til en lukket gruppe på maksimalt 150.</p>
    </div>
  }
});


module.exports = About;
