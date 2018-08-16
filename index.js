const timelineFunction = require('./src/js/timeline').default;

// Register as a jQuery plugin if the jQuery library is present
if (window.jQuery) {
  (($) => {
    $.fn.timelineFunction = function(opts) {
      timelineFunction(this, opts);
      return this;
    };
  })(window.jQuery);
}

module.exports = {
  timelineFunction: timelineFunction
};
