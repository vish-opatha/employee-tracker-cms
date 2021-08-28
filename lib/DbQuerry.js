const mysql = require('mysql2');

class DbQuerry {
  constructor(){
    this.host = 'localhost';
    this.user = 'root';
    this.password = 'YJ3aXUd@2enSbF';
    this.database = 'employee_db';
  }


  openDatabase(){
    const db = mysql.createConnection({
               host : this.host,
       user : this.user,
             password : this.password,
             database : this.database,
      // 

    });
    return db;
  }
 

  showAllEmployees(){
    const dbCon = this.openDatabase();
    dbCon.query('SELECT * FROM employee', function (err, results) {
      console.log(results);
    });
    // this.db.end();
  } 

 
    
}

module.exports = DbQuerry;



