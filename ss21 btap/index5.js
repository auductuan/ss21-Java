let time = prompt("Nhập 1 tháng bất kì");
switch (time) {
    case 1,3,5,7,9,11:
        console.log("Đây là tháng có 30 ngày");
        break;
    case 2:
        console.log("Đây là tháng có 29 ngày");
        break;
    case 4,6,8,10,12:
        console.log("Đây là những tháng có 31 ngày");
        break;
    default:
        console.log("Không hợp lệ")
        break;
}