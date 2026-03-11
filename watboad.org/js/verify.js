// ระบบตรวจสอบใบอนุโมทนา

function verifyCertificate(){

let code = document.getElementById("verify-code").value;

let result = document.getElementById("verify-result");

let donors = JSON.parse(localStorage.getItem("donors")) || [];

let found = donors.find(function(d){
return d.name === code;
});

if(found){

result.innerHTML =
"<h3>พบข้อมูลการทำบุญ</h3>" +
"ชื่อ: "+found.name+"<br>" +
"จำนวนเงิน: "+found.amount+" บาท<br>" +
"วันที่: "+found.date;

}else{

result.innerHTML = "ไม่พบข้อมูล";

}

}
