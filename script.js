window.onload = function () {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");

  let add = document.getElementById("btn1");
  add.onclick = function () {
    let res = parseFloat(num1.value) + parseFloat(num2.value);
    alert("Given Sum is: \n"+num1.value +"+"+num2.value+"=" + res);
  }

  let sub = document.getElementById("btn2");
  sub.onclick = function () {
    let res = parseFloat(num1.value) - parseFloat(num2.value);
    alert("Given Difference is: \n"+num1.value +"-"+num2.value+"=" + res);
  }

  let mul = document.getElementById("btn3");
  mul.onclick = function () {
    let res =parseFloat(num1.value) * parseFloat(num2.value);
    alert("Given Product is: \n"+num1.value +"*"+num2.value+"=" + res);
  }

  let div = document.getElementById("btn4");
  div.onclick = function () {
    let res =parseFloat(num1.value) /parseFloat(num2.value);
    alert("Given Quotient is: \n"+num1.value +"/"+num2.value+"=" + res);
  }

  let clear=document.getElementById("clear");
  clear.onclick= function(){
    num1.value="";
    num2.value="";
    alert("successfully!");
  }
}