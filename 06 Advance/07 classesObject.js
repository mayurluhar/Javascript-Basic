const User = require("./06 classes.js");

const mayur = new User("mayur", "mayur@gmail.com");
//console.log(mayur.getInfo());

mayur.enrollCourse("react JS");
mayur.enrollCourse("angular JS");

console.log(mayur.getCourseList());

const courseData = mayur.getCourseList();
console.log(courseData.length);
