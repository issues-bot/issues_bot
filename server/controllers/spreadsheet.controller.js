import GoogleSpreadsheets from 'google-spreadsheets';

const STOP_SPREADSHEET_ID = '1u1rn8gYCgFWDkKTrN1f3r00HnLxGMAXlwi1JFW5fl2U';

export function getStopData(req, res) {
  GoogleSpreadsheets.rows({
    key: STOP_SPREADSHEET_ID,
    worksheet: 3,
  }, (err, rows) => {
    // eslint-disable-next-line no-console
    if (err) { console.log('err.message = %j', err.message); }
    res.json({ rows, err });
  });
}

const REPRESENTATIVE_SPREADSHEET_ID = '1E1vUNYRdoo3MrmdgPN5Z0jeXqNtk3oEVR2-W2PzmNqY';

export function getRepresentativeData(req, res) {
  GoogleSpreadsheets.rows({
    key: REPRESENTATIVE_SPREADSHEET_ID,
    worksheet: 1,
  }, (err, rows) => {
    // eslint-disable-next-line no-console
    if (err) { console.log('err.message = %j', err.message); }
    res.json({ rows, err });
  });
}

