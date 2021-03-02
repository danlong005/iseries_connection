# ODBC_iSeries

This is about setting up a connection to the iSeries using ODBC. The steps that you need to follow to make this work are outlined below

## Prerequisets
### Mac
  brew install unixodbc

### Windows
none

### Linux
sudo apt-get install unixodbc unixodbc-dev



## Installation
1. Unzip the file and install the package corresponding to your system under the package directory of this project.
2. npm install
3. create a .env file then put the following in the file
```
DB_USERNAME=[your username]
DB_PASSWORD=[your password]
DB_SYSTEM=[your IBMi Server]
DB_DATABASE=[your database name]
```
4. Update the query in the index.js
5. Run `node index.js`

_NOTE:_ Do **NOT** change the driver.