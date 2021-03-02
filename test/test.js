var assert = require('assert');
var should = require('chai').should();

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
  describe("check if it is equal", () => {
    it("should be equal", (done) => {
      
      odbc.connect(cn, (error, connection) => {
        if (error) {
          console.log(error);
        } else {
          connection.query(
            `SELECT * FROM test.test 
            WHERE id in (8831,
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

                results.forEach((row) => {
                  row.PPFNAM.trim().should.equal("REFERRED");
                });
                done();
              }
            });
        }
      });
    });
  })
});