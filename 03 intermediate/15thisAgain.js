const user = {

    firstName: "Mayur",
    courseCount: 4,
    getCourseCount: function () {

        console.log("LINE 7", this);
        function sayHello(){
            console.log("hello");
            console.log("LINE 10", this);
        }
        sayHello();

    }

};
 

user.getCourseCount();

// function sayHello()
// {
//     console.log("hello");
// }

// sayHello();