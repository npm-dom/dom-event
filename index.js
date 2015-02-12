module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {
  return element.addEventListener
    ? element.addEventListener(event, callback, capture)
    : element.attachEvent('on'+event, callback, capture);
}

function off (element, event, callback, capture) {
  return element.removeEventListener
    ? element.removeEventListener(event, callback, capture)
    : element.detachEvent('on'+event, callback, capture);
}