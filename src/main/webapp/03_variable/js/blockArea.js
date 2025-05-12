const span1 = document.querySelector("#span1");
const span2_1 = document.querySelector("#span2-1");
const span2_2 = document.querySelector("#span2-2");
const span3_1 = document.querySelector("#span3-1");
const span3_2 = document.querySelector("#span3-2");
const span4 = document.querySelector(".span4-1");
const test = document.getElementById("test");



const varable1 = 1;
let varable2 = 1;
var varable3 = 1;
console.log("varable1", varable1);
console.log("varable2", varable2);
console.log("varable3", varable3);
// const varable1 = 2;//에러
// let varable2 = 2;//에러
// var varable3 = 2;
console.log("varable1", varable1);
// varable1 = 2; //const는 재선언 불가
// varable2 = 2; //let은 재선언 불가
varable3 = 2; //var은 재선언 가능
function func1(){
    // let varable2 = 2;
    // let varable2 = 2;
    // var varable3 = 2;
    // var varable3 = 2;
    // const varable1 = 2;
    // const varable1 = 2;
    //안에서 외부 변수와 같은 이름으로 선언하면
    // 외부변수는 가려지고 안에서만 사용가능
}
function func2(){
 span2_1.innerText = "메롱";
 span2_2.innerText = "메롱메롱";
}
function func3(){

}
function func4(){

}
// { } block 속에 선언된 const num1 은 { } 내에서만 사용가능한 것이며, { } 을 벗어나는 순간 자동적으로 소멸 되어진다.
// 그러므로 { } 내에서는 새로 선언이 가능하다.!!
// { } block 속에 선언된 const sum 은 { } 내에서만 사용가능한 것임.
// { } 을 벗어나는 순간 const sum 은 자동적으로 소멸 되어진다.