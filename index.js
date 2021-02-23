const odbc = require("odbc");
require('dotenv').config()

const driver = "IBM i Access ODBC Driver";
const system = process.env.SYSTEM;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const cn = 
`DRIVER=${driver};SYSTEM=${system};UID=${username};PWD=${password};DATABASE=${database}`;

odbc.connect(cn, (error, connection) => {
  if (error) {
    console.log(error);
  } else {
    connection.query(
      `SELECT * FROM test.test`,
      (error, result) => {
        if (error) {
          throw error;
        } else {
          /* GETTING RID OF JUNK FROM THE RESPONSE */
          delete result.statement;
          delete result.parameters;
          delete result.return;
          delete result.count;
          delete result.columns;

          result.forEach(row => {
            console.log(row);
          })
        }
      }
    );
  }
});