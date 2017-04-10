const React = require('react');

import { Parallax } from 'react-parallax'
import bgImage from './img/bg3.jpg'

const css = require('./css/Header.css')

var Header = React.createClass({
  render: function() {
    return <Parallax bgImage={bgImage} strength={400}>
      <div className={css.Header}>
        <h1>Engleinvestor</h1>
        <h2>Der de gode selskapene møter kompetent kapital </h2>
        <button className={css.readMore} />
        <button className={css.contactUs} />
      </div>
    </Parallax>
  }
});


module.exports = Header;
