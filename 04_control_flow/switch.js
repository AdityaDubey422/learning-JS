// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case matched")
        break;
}
// agar break nahi laayenge to saare case run kar dega except default

const monthInAlphabet = "jan"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case 'feb':
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;

    default:
        console.log("Default case matched")
        break;
}


