const fs = require('fs');

fs.readFile('./instructions.txt', (err, data) => {
  console.time('Santa Challenge');
  if (err) {
    console.log("something went wrong");
  }
  const splitData = data.toString().split('');
  let floorNumber = 0;

  splitData.map(dir => {
    if (dir === '(') {
      floorNumber += 1;
    } else {
      floorNumber -= 1;
    }
  })

  console.timeEnd('Santa Challenge');
  return floorNumber;
})
