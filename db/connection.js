const mysql = require('mysql2');

const db =  mysql.createConnection({host: 'localhost',user: 'root',password: 'YJ3aXUd@2enSbF',database: 'employee_db'});
   
db.connect((e) => {
    if(e)
    {
        throw e;
    }
})

module.exports = db;