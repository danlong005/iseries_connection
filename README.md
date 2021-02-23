# ODBC_iSeries

This is about setting up a connection to the iSeries using ODBC. The steps that you need to follow to make this work are outlined below

## Prerequisets
### Mac
  brew install unixodbc

### Windows


### Linux


## Installation
1. Unzip the file and install the package corresponding to your system under the package directory of this project.
2. npm install
3. create a .env file then put the following in the file
```
USERNAME=[your username]
PASSWORD=[your password]
SYSTEM=[your IBMi Server]
DATABASE=[your database name]
```
4. Now edit index.js and set the values of the system, database to your system and database name.
5. Run `node index.js`

_NOTE:_ Do **NOT** change the driver.