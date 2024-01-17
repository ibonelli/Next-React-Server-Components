const fs = require('fs');
const path = require('path');
const os = require('os');

const filePath = path.join(__dirname, 'namelist.json');
const destinationPath = path.join(os.homedir(), 'namelist.json');

fs.copyFile(filePath, destinationPath, (err) => {
  if (err) throw err;
  console.log('namelist.json was copied to home directory');
});
