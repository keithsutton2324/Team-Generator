const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
var employeeData = []

const render = require("./lib/htmlRenderer");

Init()

function Init() {
  inquirer.prompt(
    {
      type: "list",
      name: "userChoices",
      choices: ["addManager", "addEngineer", "addIntern", "exitApplication"]
    }
  )
    .then(function (results) {
      console.log(results)
      switch (results.userChoices) {
        case "addManager":
          addManager()
          break
        case "addEngineer":
          addEngineer()
          break
        case "addIntern":
          addIntern()
          break
        case "exitApplication":
          exitApplication()
          break
      }

    })
}

function addManager() {
  console.log("Add Manager Details")
  console.log("====================")
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Employee Name", 
      name:"name"
    },
    {
      type: "input",
      message: "Enter Employee ID", 
      name:"id"
    },
    {
      type: "input",
      message: "Enter Employee Email", 
      name:"email"
    },
    {
      type: "input",
      message: "Enter Employee Office eNumber", 
      name:"officeNumber"
    }
  ])
  .then(function(results){
    var myTeamManager = new Manager(results.name, results.id, results.email, results.offNumber)
    employeeData.push(myTeamManager)
    Init()
  })
}

function addEngineer() {
  console.log("Add Engineer Details")
  console.log("====================")
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Employee Name", 
      name:"name"
    },
    {
      type: "input",
      message: "Enter Employee ID", 
      name:"id"
    },
    {
      type: "input",
      message: "Enter Employee Email", 
      name:"email"
    },
    {
      type: "input",
      message: "Enter Employee GitHub URL", 
      name:"github"
    }
  ])
  .then(function(results){
    var myTeamEngineer = new Engineer(results.name, results.id, results.email, results.github)
    employeeData.push(myTeamEngineer)
    Init()
  })
}

function addIntern() {
  console.log("Add Intern Details")
  console.log("====================")
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Employee Name", 
      name:"name"
    },
    {
      type: "input",
      message: "Enter Employee ID", 
      name:"id"
    },
    {
      type: "input",
      message: "Enter Employee Email", 
      name:"email"
    },
    {
      type: "input",
      message: "Enter Employee School", 
      name:"school"
    }
  ])
  .then(function(results){
    var myTeamIntern = new Intern(results.name, results.id, results.email, results.school)
    employeeData.push(myTeamIntern)
    Init()
  })
}
/*
function exitApplication() {
  console.log("Exit Application")
  console.log("====================")
  .then(function(results){
    exit()
  })
}
*/
function exitApplication() {
  console.log("Exit Application")
  console.log("====================")
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
