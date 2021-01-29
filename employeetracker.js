var mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const {start} = require("repl");

console.table

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
            choices: [
                "View all employees",
                "View all departments",
                "View all roles",
                "Add an employee",
                "Add a department",
                "Update employee role",
                "Add a role"
            ]
        }]).then((answer) => {
        switch (answer.mainmenu) {
            case 'View all employees': viewEmployee();
                break;

            case 'View all departments': viewByDepartment();
                break;

            case 'View all roles': viewRoles();
                break;

            case 'Add an employee': addEmployee();
                break;

            case 'Add a department': addDepartment();
                break;

            case 'Update employee role': updateRoles();
                break;

            case 'Add a role': addRole();
                break;

            default:
                // user chose 'exit'
                connection.end();
                break;
        }
    });


    function viewEmployee() {
        connection.query('SELECT * FROM employee', (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res);
            afterConnection();
        });
    }
    function viewByDepartment() {
        connection.query('SELECT * FROM department', (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res);
            afterConnection();
        });
    }
    function viewRoles() {
        connection.query('SELECT * FROM role', (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res);
            afterConnection();
        });
    }
    function addEmployee() {
        inquirer.prompt([
            {
                name: 'employfirstname',
                type: 'input',
                message: 'What is the new employees first name?'
            }, {
                name: 'employlastname',
                type: 'input',
                message: 'What is the new employees last name?'
            }, {
                name: 'roleid',
                type: 'input',
                message: 'What is the new employees role id?'
            },

        ]).then(function (answer) {
            connection.query("INSERT INTO employee SET ?", {
                first_name: answer.employfirstname,
                last_name: answer.employlastname,
                role_id: answer.roleid
            }, function (err) {
                if (err) 
                    throw err;
                


                console.log("Employee added successfully!");
                console.table(answer);
                afterConnection();
            });
        });
    }
    function addRole() {
        inquirer.prompt([
            {
                name: 'rolename',
                type: 'input',
                message: 'What is the new role?'
            }, {
                name: "salaryinput",
                type: "input",
                message: "What is the salary?"
            },

        ]).then(function (answer) { // when finished prompting, insert a new item into the db with that info
            connection.query("INSERT INTO role SET ?", {
                title: answer.rolename,
                salary: answer.salaryinput
            }, function (error) {
                if (error) 
                    throw error;
                


                console.log("Role added successfully!");
                console.table(answer);
                afterConnection();
            });
        });
    };
}

function addDepartment() {
    connection.query('INSERT TO department', (err, res) => {
        inquirer.prompt([{
                name: 'deparname',
                type: 'input',
                message: 'What is the new department name?'
            }]).then(function (answer) { // when finished prompting, insert a new item into the db with that info
            connection.query("INSERT INTO department SET ?", {
                name: answer.deparname
            }, function (error) {
                if (error) 
                    throw err;
                

                console.log("Department added successfully!");
                console.table(res);
                afterConnection();
            });
        });
    });
}

function updateRoles() {
    inquirer.prompt([
        {
            name: 'rolename',
            type: 'input',
            message: 'What is the new role?'
        }, {
            name: "salaryinput",
            type: "input",
            message: "What is the salary?"
        },
        {
            name: "idinput",
            type: "input",
            message: "What is the role id?"
        },

    ]).then(function (answer) { // when finished prompting, insert a new item into the db with that info
        connection.query("UPDATE role SET ? WHERE ?", [
            {
                title: answer.rolename,
                salary: answer.salaryinput
            },
            {
                id: answer.idinput
            }
        ]
        , function (error) {
            if (error) 
                throw error;
            


            console.log("Role updated successfully!");
            console.table(answer);
            afterConnection();
        });
    });
};
