const React = require('react');

const css = require('./css/Team.css')
import PictureOne from './img/1.png'
import PictureTwo from './img/2.png'
import PictureThree from './img/3.png'
import PictureFour from './img/4.jpg'
import LinkedInPhoto from './img/linkd.png'

var Team = React.createClass({
  toGleb: function() {
      window.open('https://www.linkedin.com/in/gleblevin/');
    },
  toBerg: function() {
      window.open('https://www.linkedin.com/in/bergmoe/');
    },
  toNico: function() {
      window.open('https://www.linkedin.com/in/nicolaitorgersen/');
    },
  toObaid: function() {
      window.open('https://www.linkedin.com/in/obaid-saleem-78735986/');
    },

  render: function() {
    return <div className={css.Team} id="team">
      <h1>Teamet</h1>
      <div className={css.pictures}>
        <img className={css.picture1} src={PictureOne} />
        <h2>Gleb Levin</h2>
        <a onClick={this.toGleb}>
        <img src={LinkedInPhoto} className={css.logoStyle} ></img></a>
      </div>
    <div className={css.pictures}>
      <img className={css.picture2} src={PictureTwo} />
      <h2>Berg Moe</h2>
      <a onClick={this.toBerg}>
      <img src={LinkedInPhoto} className={css.logoStyle} ></img></a>
    </div>
  <div className={css.pictures}>
    <img className={css.picture3} src={PictureThree} />
    <h2>Obaid Salem</h2>
    <a onClick={this.toObaid}>
    <img src={LinkedInPhoto} className={css.logoStyle} ></img></a>
  </div>
  <div className={css.pictures}>
    <img className={css.picture4} src={PictureFour} />
    <h2>Nicolai Thorgersen</h2>
    <a onClick={this.toNico}>
    <img src={LinkedInPhoto} className={css.logoStyle} ></img></a>
  </div>
  </div>
  }
});


module.exports = Team;
