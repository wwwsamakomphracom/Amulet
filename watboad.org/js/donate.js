// ระบบบันทึกข้อมูลผู้ทำบุญ

function saveDonation() {

let name = document.getElementById("name").value;
let amount = document.getElementById("amount").value;

if(name === "" || amount === ""){
alert("กรุณากรอกข้อมูลให้ครบ");
return;
}

let donors = JSON.parse(localStorage.getItem("donors")) || [];

let data = {
name:name,
amount:amount,
date:new Date().toLocaleDateString()
};

donors.push(data);

localStorage.setItem("donors", JSON.stringify(donors));

alert("บันทึกการทำบุญเรียบร้อยแล้ว");

showDonors();
}

function showDonors(){

let donors = JSON.parse(localStorage.getItem("donors")) || [];

let list = document.getElementById("donor-list");

if(!list) return;

list.innerHTML = "";

let total = 0;

donors.forEach(function(d){

total += parseInt(d.amount);

list.innerHTML +=
"<li>"+d.name+" ทำบุญ "+d.amount+" บาท ("+d.date+")</li>";

});

let totalBox = document.getElementById("total-donation");

if(totalBox){
totalBox.innerHTML = total+" บาท";
}

}

window.onload = showDonors;
