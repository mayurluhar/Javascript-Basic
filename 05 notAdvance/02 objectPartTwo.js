var User = {
  name: "",
  getFirstName: function () {
    console.log(`the name is: ${this.name}`);
  },
  courseCount: 2,
  getcourseCount: function () {
    console.log(`the total course is :${this.courseCount}`);
  },
};

var mayur = Object.create(User);
//console.log(mayur);

var zinal = Object.create(User, {
  name: { value: "zinal" },
  courseCount: { value: 4 },
});

zinal.getFirstName();
zinal.getcourseCount();
