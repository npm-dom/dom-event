## on-off

DOM Event Binding Library

## Install

```bash
$ npm install on-off
```

## Usage

```js
on = require('on-off')
off = on.off

on(document.body, hello)

later off(document.body, hello)

function hello () {
  console.log('hello!')
}
```
