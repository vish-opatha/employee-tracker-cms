const express = require('express');
const mysql = require('mysql2');
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api',api);

app.use(express.static('public'));
// Connect to database
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: 'YJ3aXUd@2enSbF',
//       database: 'employee_db'
//     },
//     console.log(`Connected to the employee_db database.`)
//   );

//   db.query('SELECT * FROM employee', function (err, results) {
//     console.log(results);
//   });



  // Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});