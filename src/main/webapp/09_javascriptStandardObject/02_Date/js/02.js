const timerDiv = document.getElementById("timer");
const timerDiv2 = document.getElementById("timer2");
const timerBtnDiv =  document.getElementById("timerClear");

const timerStartBtn = document.getElementById("btnTimerRestart");
const timerStopBtn = document.getElementById("btnTimerContinue");
const timerClearBtn = document.getElementById("btnTimerClear");

const testDiv = document.getElementById("test");

const emptyDate = new Date(0);//빈시간객체
let stopTime = new Date();
let tensTime = new Date( 10 * 1000);//10분

const timer = () => {
    const liveTime = new Date();
    const elapsedTime = new Date(liveTime - stopTime);
    const remainingTime = new Date(tensTime - elapsedTime); // 남은 시간 계산

    timerDiv.innerText = `${elapsedTime.getMinutes().toString().padStart(2,'0')}분 ${elapsedTime.getSeconds().toString().padStart(2,'0')}.${elapsedTime.getMilliseconds().toString().padStart(3,'0')}초`;

    if(remainingTime > 0)
        timerDiv2.innerText = `남은시간 : ${remainingTime.getMinutes().toString().padStart(2,'0')}분 ${remainingTime.getSeconds().toString().padStart(2,'0')}.${remainingTime.getMilliseconds().toString().padStart(3,'0')}초`;
    else{
        if(timerDiv2.innerText !== '시간초과!'){
            timerDiv2.innerText = `시간초과!`;
            testDiv.style.display = "none";
        }
    }


};//0.001초마다 timer 함수를 실행시킨다. ()를 안써도됨
let 멍청구리 =() => setInterval(timer, 1);

// clearInterval(멈춰)


runFunctionByButton = (btn) => {
    switch (btn.id) {
        case "btnTimerRestart":
            clearInterval(멍청구리);//()가 없으니 함수를 실행한다는것이 아닌 대입된 변수를 사용하겟단
            stopTime = new Date();
            멍청구리 = setInterval(timer, 1);

            break;
        case "btnTimerContinue":
            clearInterval(멍청구리);
            멍청구리 = setInterval(timer, 1);
            break;
        case "btnTimerClear":
            clearInterval(멍청구리);
            break;
    }
};

for (const btn of timerBtnDiv.children) {
    btn.addEventListener("click", () => {
        runFunctionByButton(btn);
    });
}

