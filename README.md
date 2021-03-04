# Node Service to read/write to Google Sheets

## Getting Started

- Enable the Google Sheets API in the Google Developers Console
  - Create a Service User account and email address
  - Copy the Project ID
  - Download the connection Keys JSON file, and save it in the root project directory as: `google_service_account_credentials.json`
- Create the `.env` file

```
cp .env.example .env
```

## References

- Google APIs: NPM `googleapis`
- Google Developers Console: https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts?supportedpurview=project
- https://hackernoon.com/how-to-use-google-sheets-api-with-nodejs-cz3v316f
- https://developers.google.com/sheets/api/reference/rest#rest-resource:-v4.spreadsheets.values
