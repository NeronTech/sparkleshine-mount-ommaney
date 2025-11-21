// ==== Google Apps Script (Code.gs) ====
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
const SHEET_USERS = 'Users';

function doGet(e){
  return handle(e);
}

function doPost(e){
  return handle(e);
}

function handle(e) {
  const action = e.parameter.action;
  if (action === 'getUsers') return json({ success: true, data: getUsers() });
  if (action === 'addUser') {
    const payload = JSON.parse(e.postData.contents);
    addUser(payload.name, payload.email);
    return json({ success: true });
  }
  return json({ error: 'Unknown action' });
}

function getUsers(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_USERS);
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  const headers = rows.shift();
  return rows.map(r => Object.fromEntries(r.map((c,i)=>[headers[i], c])));
}

function addUser(name, email){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_USERS) || ss.insertSheet(SHEET_USERS);
  if (sheet.getLastRow() === 0) sheet.appendRow(['id','name','email','created_at']);
  sheet.appendRow([Utilities.getUuid(), name, email, new Date()]);
}

function json(obj){
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
