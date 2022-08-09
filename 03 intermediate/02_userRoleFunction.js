var userRole = function (name, role)  {

    switch (role) {
        case "admin":
           return ` hello,${name},you get the all access `;
            break;
            case "subadmin":
                return ` hello,${name},you can create/delete the  content`;
                break;
            case "preptest":
                return ` hello,${name},you can create/delete the test`;
            break;
            case "User":
                return ` hello,${name},you can conssume the content `;
            break;    
        default:
            return "invalid";
            break;
    }

}

var getData = userRole("Zinal","admin");

console.log(getData);

