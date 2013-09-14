module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {
  element.addEventListener(event, callback, capture);
}

function off (element, event, callback, capture) {
  element.removeEventListener(event, callback, capture);
}
