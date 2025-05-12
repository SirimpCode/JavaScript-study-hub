const val1 = document.getElementById("val_1");
const val2 = document.getElementById("val_2");
const val3 = document.getElementById("val_3");
const val4 = document.getElementById("val_4");
const val5 = document.getElementById("val_5");
const val6 = document.getElementById("val_6");
const val7 = document.getElementById("val_7");
const val8 = document.getElementById("val_8");

const input1 = document.getElementById("val_9");
const input2 = document.getElementById("val_10");

const result10 = document.getElementById("result_10");


const type1 = document.getElementById("type_1");
const type2 = document.getElementById("type_2");
const type3 = document.getElementById("type_3");
const type4 = document.getElementById("type_4");
const type5 = document.getElementById("type_5");
const type6 = document.getElementById("type_6");
const type8 = document.getElementById("type_8");

const btn10 = document.getElementById("btn_10");

const tdVal = document.getElementById("tdVal");

window.onload = function() {
    //브라우저에 페이지 로딩이  끝나면 자동적으로 호출되어지는 함수
}
console.log(type1.innerHTML);
type1.innerHTML = '<span style="color: orange">string</span>'
// val9.value = "2125";
// val10.innerText = "5";
// console.log(val9.value);
// console.log(val10.innerText);
//
// val5.innerText = "5525";
// console.log(val5.innerText);
//
// val4.textContent = "5214";
type2.innerText = parseInt(val2.innerText).toString()+' '+ typeof parseInt(val2.innerText);
type3.innerText = parseFloat(val3.innerText).toString()+' '+ typeof parseFloat(val3.innerText);
type4.innerText = Number(val4.innerText).toString()+' '+ typeof Number(val4.innerText);
type5.innerText = Number(val5.innerText).toString()+' '+ typeof Number(val5.innerText);
type6.innerText = Number(val6.innerText).toString()+' '+ typeof Number(val6.innerText);
btn10.onclick = function() {
    const input1Value = input1.value;
    const input2Value = input2.value;

    if(input1Value === input2Value) result10.innerText = '같음';
    else result10.innerText = '다름';
}
// btn10.addEventListener("click", function() {
//     const input1Value = input1.value;
//     const input2Value = input2.value;
//
//     if(input1Value === input2Value) result10.innerText = '같음';
//     else result10.innerText = '다름';
// });
type8.innerText = (Number(val7.innerText)+Number(val8.innerText)).toString();


const testStr = "일이삼사567팔8구0";
let kor = '';
for(let i = 0; i < testStr.length; i++){
    const char = testStr.charAt(i);
    if(!isNaN(Number(char))){
        console.log(char);
    }else {
        kor += char;
    }
}
console.log("한글 : " + kor);

const person0 = {
    name: "삼시후",
    age: 6,
    mobilePhone: "01033322222",
    userid: "유저아디",
    pwd: "12341234a!"
}
const person1 = {};
person1.userid = "유저아디";
person1.pwd = "12341234a!";
person1.mobilePhone = "01022222222";
person1.name = "이시후";
person1["age"] = 5;//대괄호 표기법도있음
console.log(person1);


const jsonVal = tdVal.innerText.substring('const person2 = '.length, tdVal.innerText.length-1);
const person2 = JSON.parse(jsonVal);
//객체 배열생성
const personList = [
    person1, person2, person0
];
console.log(personList);

personList.forEach( person => {
    console.log(person.userid);
    console.log(person.pwd);
    console.log(person.mobilePhone);
    console.log(person.name);
    console.log(person.age);
})
//변수에 값이 없을때의 타입은 undefined
let undef;
document.getElementById("type_13").innerText = typeof undef;
document.getElementById("type_14").innerText = typeof person1;
document.getElementById("type_15").innerText = person1.userid;
document.getElementById("type_16").innerText = person1.pwd;
document.getElementById("type_17").innerText = person1.mobilePhone;
document.getElementById("type_18").innerText = person1.name;
document.getElementById("type_19").innerText = person1.age;
document.getElementById("type_20").innerText = person2;
document.getElementById("type_21").innerText = person2.userid;
document.getElementById("type_22").innerText = person2.pwd;
document.getElementById("type_23").innerText = person2.mobilePhone;
document.getElementById("type_24").innerText = person2.name;
document.getElementById("type_25").innerText = person2.age;

//함수도 변수에 넣을 수 있다.
//함수 표현식 Function expression
const funcSum = function(a, b) {
    return a+b;
}
document.getElementById("result_27").innerText = funcSum(40,50);
document.getElementById("type_27").innerText = typeof funcSum;

//Function declaration
function funcMinusDeclaration(a, b) {
    return a-b;
}

//화살표함수도 있디이
const funcMinus = (a, b) => {
    return a-b;
}
document.getElementById("result_29").innerText = funcMinus(60,70);


const funcMultiply = (a, b) => a*b;
/* 매개변수가 1개일때는 괄호를 생략할 수 있다.
 두개이상 또는 0개 일때는 () 를 쓰거나 (매개변수1,매개변수1) 를 넣어야하고
 => 뒤에는 1줄일땐 return을 생략하고 {}도 생략할수있다. 2줄이상일땐 {}를 쓰고 return을 명시해야 한다. */

document.getElementById("result_32").innerText = funcMultiply(20,30);
document.getElementById("result_33").innerText = funcMultiply(20,30);
document.getElementById("result_34").innerText = funcMultiply(20,30);
document.getElementById("result_35").innerText = funcMultiply(20,30);
document.getElementById("result_36").innerText = funcMultiply(200,3);
document.getElementById("type_37").innerText = typeof funcMultiply;

