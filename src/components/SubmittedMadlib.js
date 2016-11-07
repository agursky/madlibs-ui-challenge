var React = require('react');

var SubmittedMadlib = React.createClass({
  splitMadLib: function(el) {
      var splitML = [];
      splitML[0] = el.slice(1, el.length/2);
      splitML[1] = el.slice((el.length/2)+1);
      console.log(splitML);
      return splitML;
  },    
  render: function() {
    var filledInMadlib = this.getFilledInMadlib();
    return (
      // this is what creates the displayed finished
      // madlib
      <div className='submitted-madlib-container'>
        <h2>Here is your Madlib!</h2>
        <button
                className='back-button'
              onClick={this.props.reset}
            >
              Go back
            </button>
        <div className='submitted-madlib'>
            <div className='submitted-madlib-subContainer'>
          {this.splitMadLib(filledInMadlib)[0]}
    </div>
    <div className='submitted-madlib-subContainer'>
          {this.splitMadLib(filledInMadlib)[1]}
    </div>
        </div>
      </div>
    );
  },

  getFilledInMadlib: function() {

    var blankRegexp = /%&(.*?)&%/gi;
    return this.props.text.split('\n').map(
      (line, i) => (
        <span
          // don't worry about this `key` attribute
          key={`madlibline${i}`}
          className='madlib-line'
        >
          {
            line.split(blankRegexp).map(
              chunk => (
                <span
                  // don't worry about this `key` attribute
                  key={`${chunk}${i}`}
                  className={
                    this.props.value[chunk]
                    ? 'user-submitted-value'
                    : ''
                  }
                >
                  {
                    this.props.value[chunk]
                    ? this.props.value[chunk]
                    : chunk
                  }
                </span>
              )
            )
          }
        </span>
      )
    )
  }
});

module.exports = SubmittedMadlib;
