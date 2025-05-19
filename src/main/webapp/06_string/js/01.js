let carName1 = "현대 제네시스";  // 쌍따옴표
let carName2 = '기아 K9';      // 홑따옴표

const demo1 = document.getElementById("demo1");
const demo2 = document.getElementById("demo2");
const demo3 = document.getElementById("demo3");
const demo4 = document.getElementById("demo4");


demo1.innerHTML = carName1+' VS ' + carName2;
demo2.innerHTML = `${carName1} VS ${carName2}`;
demo3.innerHTML = `"${carName1}" VS "${carName2}"`;
demo4.innerHTML = "헿";

const demo5 = document.getElementById("demo5");
const demo6 = document.getElementById("demo6");
demo6.innerHTML = `"${carName1}"의 문자열 길이는 ${carName1.length}입니다.`;
demo5.innerHTML = '"'+carName2+'"의 문자열 길이는 '+carName2.length+'입니다.';

