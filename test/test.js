const { expect } = require('chai');
const chai = require('chai');

require('dotenv').config();
var odbc = require('odbc');

const driver = "IBM i Access ODBC Driver";
const system = process.env.SYSTEM;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const cn = 
`DRIVER=${driver};SYSTEM=${system};UID=${username};PWD=${password};DATABASE=${database}`;

describe("Test", () => {
  let rows = [];

  before((done) => {
    odbc.connect(cn, (error, connection) => {
      if (error) {
        console.log(error);
      } else {
        connection.query(
          `SELECT * FROM prepaid.bilfilep 
           WHERE pppol in (8831,
            8834,
            8819,
            8805,
            8816
            )`, 
          (error, results) => {
            if (error) {
              console.log(error);
            } else {
              delete results.statement;
              delete results.parameters;
              delete results.return;
              delete results.count;
              delete results.columns;
 
              rows = results;
              asyncTests();

              done();
            }
          }
        )
      }
    });
  });

  it("does a thing", () => {
    expect(0).to.equal(0);
  });

  function asyncTests() {
    describe(`Checking first name for each member`, () => {
      rows.forEach((row) => {
        it(`Test ${row.PPFNAM.trim()} equals REFERRED`,() => {
          expect(row.PPFNAM.trim()).to.equal("REFERRED");
        });
      });
    });
  }
});
