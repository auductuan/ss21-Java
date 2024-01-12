let a=prompt("Nhập điểm toán");
let b=prompt("Nhập điểm văn");
let c=prompt("Nhập điểm anh");
let tbm=(a + b  + c)/3;
if( 8.0 <= tbm && tbm <= 10.0 ){
    console.log("  xếp loại giỏi " ,tbm);
}else if( 6.5 <= tbm && tbm <= 7.9){
    console.log(" xếp loại khá ", tbm);
} else if(5.0 <= tbm && tbm <= 6.4){
    console.log(" xếp loại trung binh ", tbm);
}else if( tbm < 5.0){
    console.log(" xếp loại yếu ",tbm);
}else {
    console.log("kh hợp lệ ");
}