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

function reset () {
  document.body.innerHTML = '<button>Click Me</button>';
  button = document.querySelector('button');
}
