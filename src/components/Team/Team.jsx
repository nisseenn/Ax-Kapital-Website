const React = require('react');

const css = require('./css/Team.css')
import PictureOne from './img/1.png'
import PictureTwo from './img/2.png'
import PictureThree from './img/3.png'
import PictureFour from './img/4.jpg'

var Team = React.createClass({
  toSite: function() {
      window.open('https://www.linkedin.com/in/gleblevin/');
    },
  render: function() {
    return <div className={css.Team}>
      <h1>Teamet</h1>
      <div className={css.pictures}>
        <img className={css.picture1} src={PictureOne} />
        <h2>Gleb Levin</h2>
        <button onclick={this.toSite}>LinkedInLogo</button>
      </div>
    <div className={css.pictures}>
      <img className={css.picture2} src={PictureTwo} />
      <h2>Berg Moe</h2>
      <button>Linkdinlogo</button>
    </div>
  <div className={css.pictures}>
    <img className={css.picture3} src={PictureThree} />
    <h2>Obaid Salem</h2>
    <a>LinkedIn logo here</a>
  </div>
  <div className={css.pictures}>
    <img className={css.picture4} src={PictureFour} />
    <h2>Nicolai Thorgersen</h2>
    <a>LinkedIn logo here</a>
  </div>
  </div>
  }
});


module.exports = Team;
