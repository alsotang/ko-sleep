import ms from 'ms'

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