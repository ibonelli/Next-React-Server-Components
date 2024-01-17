import fs from 'fs';
import path from 'path';

export function getData() {
	const os = require('os');
	const homeDirectory = os.homedir();
	const filePath = path.resolve(homeDirectory, "namelist.json");

	var MyList: any;
  try {
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		MyList = JSON.parse(fileContent);
	} catch {
		MyList = [{ "name": "Error", "age": "Missing namelist.json file" }];
		console.error("Need to add the file name_list.json to your home directory.");
	}

	return MyList;
}