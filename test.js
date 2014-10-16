var test = require("prova");
var find = require( 'dom-select' );
var on = require('./');
var off = on.off;
var button, buttons;

reset();

test('binds and unbinds a new event', function(t){
  t.plan(1);

  on(button, 'click', callback);

  setTimeout(function(){
    button.click();
  }, 100);

  function callback () {
    off(button, 'click', callback);
    button.click();
    t.ok(true);
  }
});

test('binds and unbinds a new event on multiple items', function(t){
  t.plan(1);

  on(buttons, 'click', callback);

  setTimeout(function(){
    buttons[ 0 ].click();
  }, 100);

  function callback () {
    off(buttons[ 0 ], 'click', callback);
    button.click();
    t.ok(true);
  }
});

function reset () {
  document.body.innerHTML = '<button>Click Me</button><button>Click Me Too</button>';
  button = document.querySelector('button');
  buttons = find.all( 'button' );

  console.log( buttons );
}
