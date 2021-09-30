import ms from 'ms'

/**
 * @param time - millisecond number, or '1s' which https://www.npmjs.com/package/ms support
 */
function sleep(time: number | string): Promise<void> {
  let numTime: number
  if (typeof time === 'string'){
    numTime = ms(time);
  } else {
    numTime = time;
  }

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve()
    }, numTime)
  })
}

export = sleep