const employeeR = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
employeeR.get('/', (req, res) => {
    const db = mysql.createConnection(
        {
          host: 'localhost',
          user: 'root',
          password: 'YJ3aXUd@2enSbF',
          database: 'employee_db'
        },
        console.log(`Connected to the employee_db database.`)
      );
    
      db.query('SELECT * FROM employee', function (err, results) {
          results.json(JSON.parse(results));
        console.log(results);
      });
//   console.info(`${req.method} request received for feedback`);

//   readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting feedback
// fb.post('/', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to submit feedback`);

//   // Destructuring assignment for the items in req.body
//   const { email, feedbackType, feedback } = req.body;

//   // If all the required properties are present
//   if (email && feedbackType && feedback) {
//     // Variable for the object we will save
//     const newFeedback = {
//       email,
//       feedbackType,
//       feedback,
//       feedback_id: uuid(),
//     };

//     readAndAppend(newFeedback, './db/feedback.json');

//     const response = {
//       status: 'success',
//       body: newFeedback,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting feedback');
//   }
// });

module.exports = employeeR;