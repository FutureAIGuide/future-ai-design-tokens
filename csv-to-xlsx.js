const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Path to the CSV file
const csvFilePath = path.join(__dirname, 'fg-design-tokens.csv');

// Read the CSV file
const csvData = fs.readFileSync(csvFilePath, 'utf8');

// Parse the CSV data
const workbook = xlsx.read(csvData, { type: 'string' });

// Write to XLSX file
xlsx.writeFile(workbook, path.join(__dirname, 'fg-design-tokens.xlsx'));

console.log('Successfully converted CSV to XLSX!');
