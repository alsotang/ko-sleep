var sleep = require('./')

describe('test.js', function () {
  it('should sleep', function * () {
    var start = new Date();
    yield sleep(30);
    (new Date - start).should.aboveOrEqual(30)
  })
})