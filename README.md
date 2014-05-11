## dom-event

Add/remove DOM events

## Install

```bash
$ npm install dom-event
```

## Usage

```js
var on = require('dom-event')
var off = on.off

on(document.body, hello) // adds the event listener
off(document.body, hello) // removes

function hello () {
  console.log('hello!')
}
```
