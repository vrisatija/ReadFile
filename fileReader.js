const fs = require('fs');

const readFile = () => {
  const data = fs.readFileSync(
    './text.txt',
    { encoding: 'utf8', flag: 'r' },
  );
  console.log(data);
};
readFile();
module.exports = readFile;
