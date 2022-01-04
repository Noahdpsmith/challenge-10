
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site.js');
const pageTemplate = require('./src/page-template.js');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
employeestuff = [];
const managerQuestions = [
    {
        type: 'number',
        name: 'id',
        message: 'Enter your team managers employee ID',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your team managers employee ID!");
            return false;
          }
        }
      },
      {
    type: 'input',
    name: 'name',
    message: 'What is your Managers name?',
    validate: managerNameInput => {
      if (managerNameInput) {
        return true;
      } else {
        console.log("Please enter your managers name!");
        return false;
      }
    }
  },

  {
    type: 'number',
    name: 'officeNumber',
    message: 'Enter your team managers office number',
    validate: officeInput => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please enter your team managers office number!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your team managers email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your team managers email address!");
        return false;
      }
    }
  },

]

const employeeQuestions = [
  {
    type: 'list',
    name: 'addEmployee',
    message: 'Would you like to add a Employee to your team? (Engineer or Intern)',
    choices: [
      "Yes, please add an Engineer to my team",
      "Yes, please add an Intern to my team",
      "No, there are no more team members to add"
    ]
  }

]

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Whats this engineers name?',
    validate: engineerNameInput => {
      if (engineerNameInput) {
        return true;
      } else {
        console.log("Please enter the engineers name!");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter this engineers employee ID',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter this engineers employee ID!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your team managers email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your team managers email address!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter this engineer\'s GitHub username',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter this engineer\'s GitHub username!");
        return false;
      }
    }
  },
]

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is this interns name?',
    validate: internNameInput => {
      if (internNameInput) {
        return true;
      } else {
        console.log("Please enter your interns name!");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter this interns employee ID',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter this interns employee ID!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your interns email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your interns email address!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter this interns school name',
    validate: schoolInput => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter this interns school name!");
        return false;
      }
    }
  },
]

const addManager = async() => {
  const result = await inquirer.prompt(managerQuestions)
  
  const managerOccurance = new Manager(
    result.name,
    result.id,
    result.email,
    result.officeNumber
  );
  employeestuff.push(managerOccurance);
  addEmployee();
};
const addEmployee = async() => {
  const result = await inquirer.prompt(employeeQuestions)
  .then(function(result) {
    switch (result.addEmployee) {
      case "Yes, please add an Engineer to my team":
        addEngineer();
        break;
      case "Yes, please add an Intern to my team":
        addIntern();
        break;
      case "No, there are no more team members to add":
        writeFile(employeestuff);
        break;
    }
  })
}
const addEngineer = async() => {
  const result = await inquirer.prompt(engineerQuestions)


  const engineerOccurance = new Engineer(
    result.name,
    result.id,
    result.email,
    result.github
  )

  employeestuff.push(engineerOccurance);
  addEmployee();
}
const addIntern = async() => {
  const result = await inquirer.prompt(internQuestions)

  const internOccurance = new Intern(
    result.name,
    result.id,
    result.email,
    result.school
  )
  employeestuff.push(internOccurance)
  addEmployee();
}
addManager();
