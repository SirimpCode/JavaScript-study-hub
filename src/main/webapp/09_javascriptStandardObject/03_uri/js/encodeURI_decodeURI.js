const inputText = document.getElementById("inputText");
const encode1 = document.getElementById("encode1");
const encodeInput = document.getElementById("encodeInput");
const decode1 = document.getElementById("decode1");
const decode2 = document.getElementById("decode2");
const btnOk1 = document.getElementById("btnOK_1");
const btnReset1 = document.getElementById("btnReset_1");
const btnOk2 = document.getElementById("btnOK_2");
const btnReset2 = document.getElementById("btnReset_2");
inputText.focus();

funcEncode = () => {
    const inputValue = inputText.value;
    if (inputValue.length === 0) {
        alert('인코딩할 문자열을 입력하세요');
        return;
    }
    /*encodeURIComponent: URL의 특정 구성 요소를 인코딩.
    encodeURI: URL 전체를 인코딩하며, URL 구분 문자는 제외.*/
    encodeInput.value = encodeURI(inputValue);//아래의 인코딩된 값 입력 칸에 자동입력
    decode1.innerText = decodeURI(encodeInput.value);
    encode1.innerText = encodeInput.value;
}
btnOk1.addEventListener("click", funcEncode);
funcDecode = () => {
    const inputValue = encodeInput.value;
    if (inputValue.length === 0) {
        alert('디코딩할 문자열을 입력하세요');
        return;
    }
    decode2.innerText = decodeURI(inputValue);
    inputText.value = decode2.innerText;
}

btnOk2.addEventListener("click", funcDecode);
btn1Event = () => {
    inputText.value = '';
    encode1.innerText = '';
    decode1.innerText = '';
}

btnReset1.addEventListener("click", btn1Event);

btn2Event = () =>{
    encodeInput.value = '';
    decode2.innerText = '';
}
btnReset2.addEventListener("click", btn2Event);

//keydown 과 keyup 그리고 keypress 의 차이
//keydown: 키를 눌렀을 때 발생
//keyup: 키를 뗐을 때 발생
//keypress: 키를 눌렀을 때 발생(문자키에 대해서만 발생 일부 제어키도 적용됨 엔터 스페이스) 비표준이라 권장되지않음
inputText.addEventListener("keyup", (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        //shift키를 누르고 엔터를 눌렀을때는 줄바꿈을위해 제외
        funcEncode();
    }
    else if (e.key === 'Escape') {
        btnReset1.click();//버튼 클릭 이벤트 발생
    }
})
//keyCode 는
//keyCode: 키보드의 키를 눌렀을 때 발생하는 코드(키보드의 각 키에 대해 고유한 숫자값을 부여)
//keyCode는 deprecated 됨
//key: 눌린 키의 값을 나타내는 문자열(예: "Enter", "Escape", "a", "1" 등)
//key는 표준화된 속성으로 사용 권장
//keyCode는 사용하지 않는 것이 좋음
encodeInput.addEventListener("keyup", (e) => {
    console.log(e.code);
    if (e.key === 'Enter' && !e.shiftKey) {
        funcDecode();
    }else if(e.key === 'Escape'){
        btn2Event();
    }
})