const React = require('react');

const css = require('./FiksyForm.css')

var FiksyForm = React.createClass({
  componentWillMount: function(){
    if (typeof this.props.onChange === 'undefined'){
      console.error("The FiksyForm needs a callback to handle changes in input elements: onChange(index, value)");
    }
  },
  handleChange: function(e){
    this.props.onChange(parseInt(e.target.name), e.target.value);
  },
  handleEnterClick: function(e){
    if (e.keyCode == 13)
        this.props.onSubmit();
  },
  render: function() {
    var submitLabel = "Submit", extraStyle;
    var color = "";
    var style = css.stack;
    var btnStyle = css.green;
    if (typeof this.props.minWidth !== 'undefined') {
      extraStyle = {minWidth: this.props.minWidth}
    }
    if (typeof this.props.format !== 'undefined') {
      switch (this.props.format) {
        case "inline": style = css.inline; break;
        case "stack": style = css.stack; break;
        default: style = css.stack;
      }
    }
    if (typeof this.props.submitLabel !== 'undefined') {
      submitLabel = this.props.submitLabel;
    }
    if (typeof this.props.color !== 'undefined') {
      switch (this.props.color) {
        case "red": btnStyle = css.red; break;
        case "yellow": btnStyle = css.yellow; break;
        case "blue": btnStyle = css.blue; break;
        case "green": btnStyle = css.green; break;
        default: btnStyle = css.green;
      }
    }
    var elements = [], placeholders = [];
    for (var i = 0; i < this.props.skeleton.length-1; i++) {
      placeholders[i] = "";
      if (this.props.placeholders[i] !== undefined)
        placeholders[i] = this.props.placeholders[i];
      elements[i] = <input type={this.props.skeleton[i]} value={this.props.bindings[i]} name={i} key={i} onChange={this.handleChange} placeholder={placeholders[i]} />;
    }
    //Last element has eventlistener
    var last = this.props.skeleton.length-1;
    if (this.props.placeholders[last] !== undefined)
      placeholders[last] = this.props.placeholders[last];
    elements[last] = <input type={this.props.skeleton[last]} value={this.props.bindings[last]} name={last} key={last} onChange={this.handleChange} onKeyUp={this.handleEnterClick} placeholder={placeholders[last]} style={extraStyle} />;

    return (
      <div className={style+" "+css.form}>
        {elements}
        <button className={btnStyle} onClick={this.props.onSubmit}>{submitLabel}</button>
      </div>
    );
  }
});

module.exports = FiksyForm;
