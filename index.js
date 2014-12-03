module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {
  element.attachEvent && (event = 'on' + event);
  (element.addEventListener || element.attachEvent).call(element, event, callback, capture);
  return callback;
}

function off (element, event, callback, capture) {
  element.detachEvent && (event = 'on' + event);
  (element.removeEventListener || element.detachEvent).call(element, event, callback, capture);
  return callback;
}
