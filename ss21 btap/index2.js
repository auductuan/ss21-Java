let number = +prompt("Nhập 1 số bất kỳ");
if(number>0){
    if(number%2==0){
        console.log("Number là số chẵn");
    }else{
        console.log("Number là số lẻ");
    }
}else{
    console.log("Number kh hợp lệ ");
}