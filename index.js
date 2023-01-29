const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distpath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers =[];
const idArray = [];

console.log(
    '\nWelcome to the team generator! \n Use `npm run reset` to reset the dist/ folder \n'
);

function appMenu() {
    function createManager() {
        console.log('Please build your team');
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: "What is the team manager's name?",
                    Validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'please enter at least one character.';
                    },
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "What is the team manager's id?",
                    Validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        return 'Please enter a positive number greater than zero.';
                    },
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "What is the team manager's email?",
                    Validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                            return true;
                        }
                        return 'Please enter a valid email address.';
                    },
                },
                {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: "What is the team manager's office number?",
                    Validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        return 'Please enter a positive number greater than zero';
                    },
                },
            ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamMembers.push(manager);
                idArray.push(answers.managerId);
                createTeam();
            });
    }

    function createTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'memberChoice',
                    message: "Which type of team member would you like to add?",
                    choices: [
                        'Engineer',
                        'Intern',
                        "I don't want to add any more team members",
                    ]
                }
            ])
            .then((userChoice) => {
                switch (userChoice.memberChoice) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            });
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "what is engineer's name?",
                    Validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter at least one character.';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is the engineer's id?",
                    Validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            if (idArray.includes(answer)) {
                                return ' This ID is already taken. Please enter a different number'
                            }else{
                                return true;
                            }
                        }
                        return 'Please enter a positive number greater than zero.';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is the engineer's email?",
                    Validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                            return true;
                        }
                        return 'Please enter a valid email address.';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is the engineer's Github username?",
                    Validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter atleast one character';
                    },
                },
               
            ])
            .then((answers) => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGithub
                );
                teamMembers.push(engineer);
                idArray.push(answers.engineerId);
                createTeam();
            });
    }

    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "what is intern's name?",
                    Validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter at least one character.';
                    },
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "What is the intern's id?",
                    Validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            if (idArray.includes(answer)) {
                                return ' This ID is already taken. Please enter a different number'
                            }else{
                                return true;
                            }
                        }
                        return 'Please enter a positive number greater than zero.';
                    },
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is the intern's email?",
                    Validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                            return true;
                        }
                        return 'Please enter a valid email address.';
                    },
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: "What is your intern's school?",
                    Validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter at least one character.';
                    },
                },
               
            ])
            .then((answers) => {
                const intern = new Intern(
                    answers.internName,
                    answers.internId,
                    answers.internEmail,
                    answers.internGithub
                );
                teamMembers.push(intern);
                idArray.push(answers.internId);
                createTeam();
            });
    }

    function buildTeam() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distpath, render(teamMembers), 'utf-8');
    }

    createManager();

}

appMenu();

// collect managers info 
// create function to prompt managers information
// create a new instance of manager using manager class based on info collected
// push nnew manager instance into a global array
// call opon another function(2) another prompt that gives a list of options as engineer, intern or finish building the team
// if else or switch statement function (3) prompt information for engineer
// push nnew engineer instance into a global array
// repeat until calling a function(use fs to write into the html though a template you create through the src folder) to finish building team