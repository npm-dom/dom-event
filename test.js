var on = require('./');
var off = on.off;
var button;

beforeEach(function(){
  document.body.innerHTML = '<button>Click Me</button>';
  button = document.querySelector('button');
});

it('binds and unbinds a new event', function(done){
  on(button, 'click', callback);

  setTimeout(function(){
    button.click();
  }, 100);

  function callback () {
    off(button, 'click', callback);
    button.click();
    done();
  }

});
