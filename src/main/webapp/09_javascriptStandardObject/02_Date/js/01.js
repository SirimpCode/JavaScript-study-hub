const currentDate1Td = document.getElementById("current_date_1");
const currentDate2Td = document.getElementById("current_date_2");
/*
       자바스크립트 new Date() 란?
      ==> new Date() 는 new Date() 가 실행되는 시점에 날짜 및 시간 데이터를 갖고 오는 것이다.
           출력하게 되면 요일명 월 일 년도 시:분:초 GMT기준시간을 표시해준다.

        자바스크립트 get날짜함수란?
      ==> getFullYear / getMonth / getDate 등 get날짜함수는 날짜 데이터에서 필요한 형식만 갖고 오는 함수이다.

         종류               리턴값
         -----------------------------------
         getFullYear()      YYYY
           getMonth()         MM     !중요! 자바스크립트의 월은 0부터 시작하기 때문에 1을 더해야 정상적인 월이 된다.
           getDate()          DD
           getDay()           0 ~ 6 (일 ~ 토)
           getHours()         HH
           getMinutes()       MM
           getSeconds()       SS
           getMilliseconds()  mmm

       자바스크립트 set날짜함수란?
      ==> setFullYear / setMonth / setDate 등 set날짜함수는 날짜 데이터의 원하는 형식의 값으로 대입해주는 함수이다.
          종류 : setFullYear(), setMonth(), setDate(),
                 setHours(), setMinutes(), setSeconde(), setMilliseconds()
    */


//시계만들기
// 1초마다 현재시간을 가져와서 td에 넣어준다.
// setInterval() : 지정된 시간 간격으로 반복적으로 실행되는 함수
// setInterval(함수, 시간)
// setInterval(함수, 밀리초)
// setInterval(함수, 1000) : 1초마다 실행
// 2번째 인수가 없을경우 0으로 설정된다.
// setInterval(함수) : 0초마다 실행
const modalElement = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close_btn');
const funcTimeBomb1 = () => {
        // modalElement.style.display = "block";
    setTimeout(() => { // 약간의 지연 후 opacity 변경
        modalElement.style.opacity = "1";
    }, 10); // 10ms 지연
}

setTimeout(() => funcTimeBomb1(), 5000);
// 5초 후에 실행;

modalCloseBtn.addEventListener('click', () => {
    modalElement.style.transition = "none";
    modalElement.style.opacity = "0";
    modalElement.style.display = "none";
})
const modalPopupBtn = document.querySelector('.modal_btn');

console.log(modalPopupBtn.innerHTML);
modalPopupBtn.addEventListener('click', () => {
    modalElement.style.display = "block";
    modalElement.style.opacity = "1";
})

funcTime = () =>{

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const date = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    // padStart(2, '0') : 2자리로 맞추고, 빈자리는 앞에 0으로 채운다.
    const millisecond = currentDate.getMilliseconds().toString().padStart(3, '0');
    // currentDate1Td.innerText = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;
    currentDate1Td.innerText = currentDate.toLocaleString();
    currentDate2Td.innerText = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}:${millisecond}`;
}

setInterval(()=>{
    funcTime();
})
// 1초마다 반복

const timerTr = document.getElementById('#timer');
//비어있는 데이트 객체 생성하기
const timerVar = new Date(new Date() - new Date());

setInterval(()=>{

}, 1000)





