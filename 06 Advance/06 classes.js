class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return { name: this.name, email: this.email };
  }

  courselist = [];

  enrollCourse(name) {
    this.courselist.push(name);
  }

  getCourseList() {
    return this.courselist;
  }

  static login() {
    return "hey,IM a dad";
  }
}

module.exports = User;

class subAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }

  loginSub() {
    return "hey im subAdmin";
  }
}

const mayur = new User("mayur", "Mayur@gmail.com");

const interitTest = new subAdmin();

console.log(interitTest.loginSub());
//console.log(interitTest.login());

console.log(interitTest.getInfo());
