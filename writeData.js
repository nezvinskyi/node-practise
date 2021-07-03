const fs = require('fs').promises;

const readData = async () => {
  try {
    const data = await fs.readFile('db.json');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const writeData = async () => {
  fs.writeFile('db.json', '[{ "test": "test1" }, { "jest": "test2" }]');
};

readData().then(console.table);
writeData();
