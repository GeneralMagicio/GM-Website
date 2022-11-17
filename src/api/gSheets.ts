import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID as string
const SHEET_ID = process.env.SHEET_ID as string
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL as string
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY as string

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const appendSpreadsheet = async (row: any) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};