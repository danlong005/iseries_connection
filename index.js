const odbc = require("odbc");
require('dotenv').config()

const driver = "IBM i Access ODBC Driver";
const system = process.env.SYSTEM;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;


const cn = 
`DRIVER=${driver};SYSTEM=${system};UID=${username};PWD=${password};DATABASE=${database}`;

async function getData() {
  try {
    let conn = await odbc.connect(cn);
    let result = await conn.query(`SELECT * FROM prepaid.bilfilep 
      WHERE pppol in (8831,
        8834,
        8819,
        8805,
        8816,
        70026094469
        )`);
    delete result.statement;
    delete result.parameters;
    delete result.return;
    delete result.count;
    delete result.columns;
    
    console.log(result);

  } catch (error) {
    console.log(error);
  }
}

getData();
