var User = function (userName, courseCount) {
  this.userName = userName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Your First Name is: ${this.userName}`);
};

var mayur = new User("Mayur", 2);
console.log(mayur);
mayur.getCourseCount();

//HAS HASOWNPROPERTY USE HERE
if (mayur.hasOwnProperty("userName")) return mayur.getFirstName();

var zinal = new User("zinal", 1);
console.log(zinal);
zinal.getCourseCount();
zinal.getFirstName();
