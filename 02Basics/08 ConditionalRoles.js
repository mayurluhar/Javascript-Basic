var user = "ooa";

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
     case "subadmin":
        console.log("you can create/delete the content");
        break;
    case "testprep":
        console.log("you can create/delete the test");
        break;
    case "user":
        console.log("you can conssume the content");
        break;
    default:
        console.log("not valid");
        break;
}