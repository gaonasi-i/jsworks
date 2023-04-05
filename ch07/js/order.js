//체크 박스 속성의 이벤트 처리하기
let check = document.querySelector("shippingInfo");

//체크 이벤트를 구현
check.addEventListener("click", checkBox);
let billingName = document.getElementById("billingName");
let billingTel = document.getElementById("billingTel");
let billingAddr = document.getElementById("billingAddr");

let shippingName = document.getElementById("shippingName");
let shippingTel= document.getElementById("shippingTel");
let shippingAddr= document.getElementById("shippingAddr");

function checkBox(){
    if(check.checked == true){
    billingName.value = shippingName.value;
    billingTel.value = shippingTel.value;
    billingAddr.value = shippingAddr.value;
    }else{
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
}