const mayur = {
  firstName: "mayur",
  lastName: "luhar",
  role: "Admin",
  courseCount: 5,
  getInfo: function () {
    console.log(`
        The Firstname is: ${this.firstName}
        The Lastname is: ${this.lastName}
        role: ${this.role}
        corseCount: ${this.courseCount}
    
    `);
  },
};

//mayur.getInfo();

const zinal = {
  firstName: "zinal",
  lastName: "chauhan",
  role: "sub-Admin",
  courseCount: 2,
};

//CHANGING THE THIS REFERNCE USING BIND.
mayur.getInfo.bind(zinal)(); //METHOD_1
const zinalinfo = mayur.getInfo.bind(zinal); //METHOD_2
zinalinfo();

//CHANGING THE THIS REFERNCE USING CALL.
mayur.getInfo.call(zinal);
