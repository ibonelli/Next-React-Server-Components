const fs = require('fs');
const path = require('path');
const os = require('os');

const filePath = path.join(os.homedir(), 'namelist.json');

fs.unlink(filePath, (err) => {
  if (err) throw err;
  console.log('namelist.json was deleted from home directory');
});
