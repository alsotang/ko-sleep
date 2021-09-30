const test = require('ava')
const sleep = require('..')

test('should sleep', async function (t) {
  var start = new Date();
  await sleep(30);

  t.true((new Date - start) >= 30)
})

test('should sleep with human time string', async function (t) {
  var start = new Date();
  await sleep('30ms');
  t.true((new Date - start) >= 30)
})