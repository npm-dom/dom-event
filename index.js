module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {

  if( element instanceof NodeList ) {

    for( var i = 0, len = element.length; i < len; i++ ) {

      oneOn(element[ i ], event, callback, capture);
    }
  } else {

    oneOn(element, event, callback, capture);  
  }

  return callback;
}

function off (element, event, callback, capture) {

  if( element instanceof NodeList ) {

    for( var i = 0, len = element.length; i < len; i++ ) {

      oneOff(element[ i ], event, callback, capture);
    }
  } else {

    oneOff( element, event, callback, capture );
  }
  
  return callback;
}

function oneOn (element, event, callback, capture) {

  (element.addEventListener || element.attachEvent).call(element, event, callback, capture);
}

function oneOff (element, event, callback, capture) {

  (element.removeEventListener || element.detachEvent).call(element, event, callback, capture);
}