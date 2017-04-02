const React = require('react');
import { connect } from 'react-redux'

const css = require('./css/Team.css')
import PictureOne from './img/1.png'
import PictureTwo from './img/2.png'
import PictureThree from './img/3.png'

var Team = React.createClass({
  render: function() {
    return <div className={css.Team}>
      <h1>Teamet</h1>
      <div className={css.pictures}>
        <img className={css.picture1} src={PictureOne} />
        <h2>Gleb Levin</h2>
        <p>quote of life</p>
      </div>
    <div className={css.pictures}>
      <img className={css.picture2} src={PictureTwo} />
      <h2>Berg Moe</h2>
      <p>quote of life</p>
    </div>
  <div className={css.pictures}>
    <img className={css.picture3} src={PictureThree} />
    <h2>Obaid Saleem</h2>
    <p>quote of life</p>
  </div>
  </div>
  }
});


module.exports = Team;
