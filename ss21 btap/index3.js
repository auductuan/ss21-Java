let week = +prompt("Nhập số ngày trong tuần");
switch (week) {
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday");
        break;
    case 8:
        console.log("Sunday");
        break;
    default:
        console.log("Nhập kh hợp lệ");
        break;
}