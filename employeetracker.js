var mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "mazda2020",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) 
        throw err;
    
    console.log("connected as id " + connection.threadId);
    afterConnection();
});
function afterConnection() {
  inquirer.prompt([{
          type: "list",
          message: "What would you like to do?",
          name: "mainmenu",
          choices: ["View all employees", "View all employees by department", "View all employees by roles"]
      }]).then((answer) => {
      viewEmployee();
})}

function viewEmployee() {
  // console.log("viewEmployee");
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            throw err;
        }
        console.log(res);
    });
}
function viewEmployee() {
  // console.log("viewEmployee");
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            throw err;
        }
        console.log(res);
    });
}

// .then(data => {
// fs.writeFile(`sampleREADME.md`, generateMarkdown(data), err  => err ? console.error(err) : console.log('Success!'));
// }).catch(err => {
// console.log(err);
// });
