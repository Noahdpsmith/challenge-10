
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const pageTemplate = function(employeestuff) {
  const employeeHtmlArray = [];
  const headingHTML = `
  <!DOCTYPE html> 
<html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body>
    <div class="container-fluid">
      <div class="row bg-danger text-center">
        <h2 class="text-light p-4">My Team</h2>
      </div>
      <div class="row g-2 justify-content-around p-3">
      `;

     employeeHtmlArray.push(headingHTML)
      for (let i = 0; i < employeestuff.length; i++) {
        employeeHtmlArray.push(employeestuff[i].getHTML());
      }
      const htmlFooter = 
      `
        </div>
            </div>
          <footer>
          <p class="position-absolute bottom-0   text-center">Thank you!</p>
          </footer>
          </body>
        </html>
      ` ; 

      employeeHtmlArray.push(htmlFooter);

      
      return employeeHtmlArray.join("\r\n");
}

module.exports = pageTemplate;