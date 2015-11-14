# ko-sleep

[![Build Status](https://travis-ci.org/alsotang/ko-sleep.svg)](https://travis-ci.org/alsotang/ko-sleep)

## usage

```js
  it('should sleep', function * () {
    var start = new Date();
    yield sleep(30);
    (new Date - start).should.aboveOrEqual(30)
  })
```

## license

MIT