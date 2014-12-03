var win = window;

var on = function (element, event, callback, capture) {
  element.addEventListener(event, callback, capture);
  return callback;
};

if (win.attachEvent && !win.addEventListener) {
  on = function (element, event, callback) {
    element.attachEvent("on" + event, callback);
    return callback;
  };
}


var off = function (element, event, callback, capture) {
  element.removeEventListener(event, callback, capture);
  return callback;
};

if (win.detachEvent && !win.removeEventListener) {
  off = function (element, event, callback) {
    element.detachEvent("on" + event, callback);
    return callback;
  };
}

module.exports = on;
module.exports.on = on;
module.exports.off = off;