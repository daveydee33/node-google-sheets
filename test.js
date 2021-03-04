const {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues,
  appendSpreadSheetValues,
} = require("./googleSheetsService.js");

const spreadsheetId = process.argv[2];
const sheetName = process.argv[3];

async function testGetSpreadSheet() {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheet({
      spreadsheetId,
      auth,
    });
    console.log(
      "output for getSpreadSheet",
      JSON.stringify(response.data, null, 2)
    );
  } catch (error) {
    console.log(error.message, error.stack);
  }
}

async function testGetSpreadSheetValues() {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth,
    });
    console.log(
      "output for getSpreadSheetValues",
      JSON.stringify(response.data, null, 2)
    );
  } catch (error) {
    console.log(error.message, error.stack);
  }
}

async function testAppendSpreadSheetValues() {
  try {
    const auth = await getAuthToken();
    const response = await appendSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth,
      values: [
        ["A", "B", "C"],
        ["D", "E", "F"],
      ],
    });
  } catch (error) {
    console.log(error.message, error.stack);
  }
}

function main() {
  testGetSpreadSheet();
  testGetSpreadSheetValues();
  // testAppendSpreadSheetValues(); // This will actually add test values to the sheet
}

main();
