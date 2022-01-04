
const Employee = require('../lib/Employee')
class Intern extends Employee {
  constructor(name, email, id, school) {
    super(name, email, id)

    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
  getHTML() {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
          <p class="card-text">ID: ${this.id}</p>
          <p class="card-text">School: ${this.school}</p>
          <a href="mailto:${this.email}" class="card-link">${this.email}</a>
      </div>
    </div>
    `
    }
}


module.exports = Intern;