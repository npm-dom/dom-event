var test = require("prova");
var on = require('./');
var off = on.off;
var button;

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

test('IE shit', function (t) {
  t.plan(2);

  on({ attachEvent: assert }, 'click', function () {});
  off({ detachEvent: assert }, 'click', function () {});

  function assert (event) {
    t.equal(event, 'onclick');
  }
});

function reset () {
  document.body.innerHTML = '<button>Click Me</button>';
  button = document.querySelector('button');
}
