// ระบบค้นหาใบอนุโมทนาบัตร

function searchCertificate(){

let keyword = document.getElementById("search").value;

let donors = JSON.parse(localStorage.getItem("donors")) || [];

let result = document.getElementById("result");

result.innerHTML = "";

let found = donors.filter(function(d){
return d.name.includes(keyword);
});

if(found.length === 0){

result.innerHTML = "ไม่พบข้อมูล";

return;

}

found.forEach(function(d){

result.innerHTML +=
"<div>" +
"<b>"+d.name+"</b><br>" +
"จำนวนเงิน: "+d.amount+" บาท<br>" +
"วันที่: "+d.date +
"</div><hr>";

});

}
