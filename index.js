module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {
  if (element.addEventListener) 
    element.addEventListener(event, callback, capture);
  else 
    element.attachEvent('on'+event, callback, capture);
  return callback;
}

function off (element, event, callback, capture) {
  if (element.removeEventListener)
    element.removeEventListener(event, callback, capture);
  else
    element.detachEvent('on'+event, callback, capture);
  return callback;
}