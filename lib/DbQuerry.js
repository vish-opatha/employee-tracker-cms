const mysql = require('mysql2');

class DbQuerry {
  constructor(){
    this.host = 'localhost';
    this.user = 'root';
    this.password = 'YJ3aXUd@2enSbF';
    this.database = 'employee_db';
    this.db = mysql.createConnection({
              host : this.host,
              user : this.user,
             password : this.password,
             database : this.database,
    })
  }

  // this.db =

  // openDatabase(){
  //   const db = mysql.createConnection({
  //              host : this.host,
  //      user : this.user,
  //            password : this.password,
  //            database : this.database,
  //     // 

  //   });
  //   return db;
  // }
 

  showAllEmployees(){
    this.db.query('SELECT * FROM employee', function (err, results) {
      console.log(results);
    });
    // dbCon.end();
  } 

 
    
}

module.exports = DbQuerry;



