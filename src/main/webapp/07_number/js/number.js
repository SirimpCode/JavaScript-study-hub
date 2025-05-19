const num1 = document.getElementById("num1").innerText;
const num2 = document.getElementById("num2").innerText;
let result = `${num1+num2}`; // 2030
document.getElementById("num3").innerHTML = result;
// 20+30=2030

const num4 = document.getElementById("num4").innerText;
const num5 = document.getElementById("num5").innerText;
result = `${Number(num4)+Number(num5)}`; // 50
document.getElementById("num6").innerHTML = result;
// 20+30=50


//////////////////////////////////////////////////////////////////
// ====  parseInt("문자열"), parseFloat("문자열"), Number("문자열") ==== //

const num7 = document.getElementById("num7").innerText;
const num8 = document.getElementById("num8").innerText;
result = `${parseInt(num7)+parseInt(num8)}`; // 20+30
document.getElementById("num9").innerHTML = result;
// 20+30=50

const num10 = document.getElementById("num10").innerText;
const num11 = document.getElementById("num11").innerText;
result = `${parseInt(num10)+parseFloat(num11)}`; // 20+30.5
document.getElementById("num12").innerHTML = result;
// 20+30.5=50.5

const num13 = document.getElementById("num13").innerText;
const num14 = document.getElementById("num14").innerText;
result = `${Number(num13)+Number(num14)}`; // 20+30.5
document.getElementById("num15").innerHTML = result;
// 20+30.5=50.5


let sum = Number(result) + 60; // 50.5 + 60
document.getElementById("div_1").innerHTML = sum;
// 110.5
const div2 = document.getElementById("div_2");
const div3 = document.getElementById("div_3");
div2.innerText= `${String(result)+60} , ${result.toString()+60}`; // 50.5 + 60
// 50.560 문자열 결합으로 그냥 뒤에 이어서나온다.
//문자열로 바꾸기 String() 또는 .toString()
//.toLocaleString() : 지역화된 문자열로 변환
//.toLocaleString('en') : 영어로 변환 숫자는 콤마로 구분하고 소수점은 3자리 이후로 절삭되는듯
div3.innerText = 1234567890.123456.toLocaleString('en') + ' , ' + 1234567890.123456.toLocaleString('ko-KR');
// 1,234,567,890.123 , 1,234,567,890.123
//.toExponential() : 지수형태로 변환
//.toFixed(자릿수) : 소수점 자릿수 지정


const p1 = document.getElementById("p_1");
const p2 = document.getElementById("p_2");
const p3 = document.getElementById("p_3");
const p4 = document.getElementById("p_4");
const p5 = document.getElementById("p_5");
const p6 = document.getElementById("p_6");
const p7 = document.getElementById("p_7");
const p8 = document.getElementById("p_8");
const p9 = document.getElementById("p_9");
const p10 = document.getElementById("p_10");



//반올림 하기
let x = 9.656;
let y = 123123;//반환값은 문자열로 나온다. 따라서 아래는 문자열 결합이됨
p1.innerText = y+=x.toFixed(2); // 1231239.66 소수점 자릿수 지정
p2.innerText = y;//1231239.66 위에서 대입까지 돼서 y값이 변경됨 +=을 이용햇기때문
p3.innerText = x.toFixed(); // 10 인수값에 0을 넣은것과 마찬가지 소수점 반올림
//100의자리숫자까지 반올림을 하려면
//두번째 방법
p4.innerText = x.toPrecision(); // 9.656
p5.innerText = x.toPrecision(2); // 9.7 2자리 남김 3쓰면 3자리까지 남김
p6.innerText = x.toPrecision(3); // 9.66
//toPrecision() : 전체 자릿수를 지정하여 반올림 1을쓰면 1e+1 나옴
p7.innerText = x.toPrecision(6);