const topH1 = document.getElementById("h1");//여기선 위의 태그가 실행된후 스크립트가 실행되므로 h1의 요소를 시작부터 찾을 수 있다.
const p = document.getElementById("demo");
const output = document.getElementById("output");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const arithmetic = document.getElementById("arithmetic");

window.onload = function (){
    //브라우저에 페이지 로딩이  끝나면 자동적으로 호출되어지는 함수
    //여기다가 입력하면됨
}
//h1 id의 요소를 불러와서 값넣기 위에것은 defer 속성으로 html이 다 로드된 후에 실행되므로 h1 id의 요소를 불러와서 값넣기 가능
document.addEventListener("DOMContentLoaded", function () {
    // const h1 = document.getElementById("h1");
    topH1.innerHTML = "헤헤헤헿";
});

//버튼 클릭시 h1 id의 요소를 불러와서 다른 값넣기
function changeH1() {
    // const h1 = document.getElementById("h1");
    //h1 요소의 값이 "헤헤헤헿"이면 "버튼 클릭"으로 바꿔라
    //h1 요소의 값이 "버튼 클릭"이면 "헤헤헤헿"으로 바꿔라
    if (topH1.innerHTML === "헤헤헤헿") {
        topH1.innerHTML = "버튼 클릭";
    } else {
        topH1.innerHTML = "헤헤헤헿";
    }
}

function changeP() {


    if (p.innerHTML === "변경전 p태그") {// " " 쌍따옴표 안에 쌍따옴표 쓰면 오류나서 안에 홑따옴표 ' '로 감싸줬음
        p.innerHTML = "<span style='color: brown; font-size: 30px'>변경된 p태그🚀🚀</span>";
    } else {
        p.innerHTML = "변경전 p태그";
    }
}

function changingBoth() {
    changeH1();
    changeP();
}
//반환값이 있는 함수
function arithmeticFunc(a, b, arithmetic) {
    if (arithmetic === "plus") {
        return parseInt(a) + parseInt(b);
    } else if (arithmetic === "minus") {
        return parseInt(a) - parseInt(b);
    } else if (arithmetic === "multiply") {
        return parseInt(a) * parseInt(b);
    } else return parseInt(a) / parseInt(b);
}
function execute(){
    console.log(arithmetic.value);
    output.innerText = arithmeticFunc(input1.value, input2.value , arithmetic.value);
}
