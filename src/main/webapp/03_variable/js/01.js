const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sum = document.getElementById("sum");

const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const minus = document.getElementById("minus");

const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const calcResult = document.getElementById("calcResult");
const operator = document.getElementById("operator");

//브라우저에 페이지 로딩이  끝나면 자동적으로 호출되어지는 함수
window.onload = function () {
    focusNum1();
    const a = 1;
    console.log(typeof (a));//변수의 타입을 확인하는 방법
    //자바스크립트에서 선언되어지는 변수의 타입은 입력되어지는 데이터값에 의해 정해진다.
}



//페이지가 로드되면 num1 이라는 input 태그에 포커스가 가게 해주는 함수
function focusNum1() {
    num1.focus();
}

function funcSumError(){
    //웹에서 입력받는 값들은 모두 string 타입으로 들어온다.
    sum.innerText = num1.value + num2.value;

}
function funcSumSuccess(){
    //숫자가 아닌 값이 들어오면 true가 나옴
    console.log(isNaN(num1.value));
    /*주의 input태그는 value로 값을 가져온다.
    * 1.innerText 2.innerHTML 3.innerContent 의 차이
    * 1. innerText 사용자에게 보여지는 문자열만 가져온다. ex) display : none 과 같이 감춰져있는 문자열은 볼 수 없음
    * 2. innerHTML 태그 안에있는 태그와같이 모든 값을 다 가져온다.
    * 3. innerContent 태그를 제외한 감춰진 문자열까지 모두 가져온다.*/
    /** https://velog.io/@kim_unknown_/JavaScript-Difftext 참고 */
    const num1IsNotNum = isNaN(num1.value);
    const num2IsNotNum = isNaN(num2.value);
    //isNaN() : 숫자가 아닌 값이 들어오면 true가 나옴
    if(num1IsNotNum || num2IsNotNum){
        alert("숫자만 입력해주세요");
        return;
    }


    const sumResult = parseInt(num1.value) + parseInt(num2.value);
    const test = parseFloat('2.4');
    let test2 = parseInt('2.4');
    test2 = '25.4';
    console.log(typeof test2);// number type 이었지만  변경해서 string type 으로 바뀜
    console.log(test);// 얘는 parseFloat로 인해 소수점이 살아있음
    console.log(test2);// 얘는 parseInt로 인해 소수점이 잘려서 2가 나옴
    sum.innerText = String(sumResult)//문자열로 변환;
    // sum.innerHTML = `<span style="color: #fae9e9;font-weight: bold;">${sumResult}</span>`;
    //템플릿 리터럴을 사용하여 문자열 안에 ${}로 변수값을 넣을 수 있다.

    //자바에선 String.format("%s %d", 문자, 숫자) 메소드를 사용하여 문자열을 포맷팅 할 수 있다.
}
function funcClear(){
    sum.innerText = "";
}

function funcRotate(){
    sum.classList.add('rotated')
    sum.style = "transform: rotateX(0deg); transition: 0.5s";
    console.log('왜안돼');
}

function funcMinusSuccess(){
    if(isNaN(num3.value)||isNaN(num4.value)){
        alert("숫자만 입력해주세요");
        return;
    }
    const minusResult = parseInt(num3.value) - parseInt(num4.value);
    minus.innerText = String(minusResult);
}
function funcMinusClear(){
    if(!confirm('지울꺼야?')) return;
    minus.innerText = '';
    num3.value = '';
    num4.value = '';
}
function executeCalc(firstNum, secondNum, operator){
    if(isNaN(firstNum)||isNaN(secondNum)){
        alert("숫자만 입력해주세요");
        return;
    }
    switch (operator) {
        case 'plus':
            return firstNum + secondNum;
        case 'minus':
            return firstNum - secondNum;
        case 'multiply':
            return firstNum * secondNum;
        case 'divide':
            return firstNum / secondNum;
        default:
            alert("잘못된 연산자입니다.");
            return;
    }
}
function calculation(){
    console.log(operator);
    if(isNaN(num5.value)||isNaN(num6.value)){
        alert("숫자만 입력해주세요");
        return;
    }
    const num5Value = parseInt(num5.value);
    const num6Value = parseInt(num6.value);
    const calcResultValue = executeCalc(num5Value, num6Value, operator.value);
    calcResult.innerText = String(calcResultValue);
}