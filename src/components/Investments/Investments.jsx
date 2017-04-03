const React = require('react');


const css = require('./css/Investments.css')

var Investments = React.createClass({
  render: function() {
    return <div className={css.Investments}>
      <h1>Invested capital so far</h1>
        <div className={css.container}>
          <div className={css.amountInvested}>
            120
          </div>
        </div>
    </div>
  }
});


module.exports = Investments;
