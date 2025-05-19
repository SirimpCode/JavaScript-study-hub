const fruitKorList = document.querySelectorAll('#div_fruit > ul:first-child > li');
//Array.from() ES6 에 새로 도입된 메서드로서 유사 배열 객체나 반복 가능한 객체를 실제 배열로 변환

console.log(fruitKorList);//nodeList
console.log(Array.from(fruitKorList));//진짜 배열로 바뀜

const fruitKorArr = Array.from(fruitKorList);
const fruitKorTextArr = fruitKorArr.map(element => element.innerText);
const fruitKorText = fruitKorTextArr.join(', ');
console.log(fruitKorText);
document.querySelector('#fruit_hangul').innerHTML = fruitKorText;


/////////Array.from(유사배열객체,map()메서드와 비슷한 1대1 매핑시켜주는 함수/////////////////
const fruitEngList = document.querySelectorAll('#div_fruit > ul:last-child > li');

//Array.from() 2번째 인자에 map() 메서드와 비슷한 1대1 매핑시켜주는 함수를 넣어주면됨
const fruitEngTextArr = Array.from(fruitEngList, (element) => element.innerText);
console.log(fruitEngTextArr);

document.querySelector('#fruit_english').innerHTML = fruitEngTextArr.join(', ');


const trAll = document.querySelectorAll("tr");

trAll.forEach(el => {
    // console.log(el.children[0].innerText);
    console.log(el.children[1].innerText);

})
const tbody = document.querySelector("tbody");
const tbodyTr = tbody.children;

let scoreSum = 0;

for (let tr of tbodyTr) {
    if(tr.children[0].innerText === '이순신'){

    }



    scoreSum += parseInt(tr.children[1].innerText);
    console.log(scoreSum);
}
quizLss1 = () =>{
    const tableTbl = document.getElementById('tbl');
    const quizResultElement = document.getElementById('quiz_result');

    quizResultElement.style.display = 'none';
    quizResultElement.innerHTML = tableTbl.parentElement.innerHTML;

    // 초기 상태 설정
    quizResultElement.style.transition = "all 1s";
    quizResultElement.style.opacity = '0';
    quizResultElement.style.transform = "translateY(-100px)";
    quizResultElement.style.display = 'block';

    // 천천히 나타나도록 setTimeout 사용
    setTimeout(() => {
        quizResultElement.style.opacity = '1';
        quizResultElement.style.transform = "translateY(50px)";
        quizResultElement.style.transition = "all 2s"

        const tbodyTrList = quizResultElement.querySelectorAll('tbody > tr');
        const tfoot = quizResultElement.querySelector('tfoot');
        tbodyTrList.forEach(tr=>{
            if(tr.children[0].innerText !== '이순신')
                tr.style.display = 'none';
        })
        tfoot.style.display = 'none';
        quizResultElement.style.transform = "translateY(0px)";

    }, 1000); // 약간의 지연을 주어 애니메이션 시작
}

const allBtn = document.querySelectorAll('button');
allBtn.forEach(el => {
    el.addEventListener('click', ()=>{
        switch(el.id){
            case 'btn_quiz':
                quizLss1();
                break;
        }
    })
})


const avgScore = (scoreSum / tbodyTr.length).toFixed(2);
const tfoot = document.querySelector("tfoot");
const tfootTr = tfoot.children;
for (let tr of tfootTr) {
    switch (tr.children[0].innerText) {
        case '총점' :
            tr.children[1].innerText = scoreSum;
            break;
        case '평균' :
            tr.children[1].innerText = avgScore;
            break;
    }
}




//복붙 하나
const arrMember = [
    {userid:"leess",  passwd:"qwer1234$", name:"이순신", age:25},
    {userid:"eomjh",  passwd:"qwer1234$", name:"엄정화", age:47},
    {userid:"seokj",  passwd:"qwer1234$", name:"서강준", age:23},
    {userid:"sunsin", passwd:"qwer1234$", name:"이순신", age:38},
    {userid:"youks",  passwd:"qwer1234$", name:"유관순", age:24}];



const lssArr = arrMember.map((element) => {
    if(element.name === '이순신') return element;
})
console.log(lssArr);
/*--------------------------------------------------------------------------------------------------------*/
// ---- **** 배열명.find() **** ----
// ES6에서 새로 도입된 메소드로서 판별함수의 조건에 만족하는 배열요소가 있으면 첫번째 배열요소를 리턴 시켜주고 끝내고,
// 판별함수의 조건에 만족하는 배열요소가 없으면 undefinded
const 이순신 = arrMember.find((element, index, array)=>{
     if(element.name === '이순신') return element;
})//    === !!!! 암기  배열명.find() 은 고유한 값(primary key / unique)으로 검색할 때 사용한다. !!! ===
console.log(이순신)



// ---- **** 배열명.filter() **** ----
// 판별함수의 조건에 만족하는 배열요소가 있으면 모든 배열요소를 담은 배열로 리턴 시켜주고,
// 판별함수의 조건에 만족하는 배열요소가 없으면 빈배열 [] 을 리턴시켜준다.
const 이순신들 = arrMember.filter((element, index, array)=>{
    if(element.name === '이순신') return element;
})
console.log(이순신들);


///////////////////////////////////////////////////////////

// ---- **** 배열명.findIndex() **** ----
// ES6에서 새로 도입된 메소드로서 판별함수의 조건에 만족하는 배열요소가 있으면 첫번째 배열요소의 인덱스번호만 리턴 시켜주고 끝내고,
// 판별함수의 조건에 만족하는 배열요소가 없으면 -1 이 나온다.

const 이순신인덱스 = arrMember.findIndex((element, index, array)=>{
    if(element.name === '이순신') return element;
})
console.log(이순신인덱스); // 0 한개만나옴





testFunction = (isFor) =>{
    console.log('\n\ntestFunction()의 시작부분');
    if(isFor){
        console.log('for문 10퀴 실행 5바퀴에서 return 만날예정');
        for(let i=0; i<10; i++){
            if(i===5) {
                console.log('return 실행')
                return;
            }
            console.log(i+'바퀴');
        }
    }else{
        console.log('forEach문 10퀴 실행 5바퀴에서 return 만날예정');

        arrMember.forEach((element, index)=>{
            if(index===5) {
                console.log('return 실행')

                return;
            }
            console.log(index+'바퀴');
        })
    }
    console.log('testFunction()의 마지막부분');
}
testFunction(true);
testFunction(false);

//20대 뽑기
const youth = arrMember.filter(element=>
    //floor 해당 수보다 작은 최대의 정수 (소수점 버림)
    //trunc 와의 차이점은 소수점이 아닌 음수일때
    //floor는 -1을 리턴하고 trunc는 0을 리턴한다.
    Math.trunc(element.age/10)=== 2
    //이 경우엔 true 일때만 대입된다 자바 stream의 filter와 비슷하다
)
console.log(youth);
const idx = arrMember.findIndex(item=>Math.floor(item.age/10)===2);
console.log(idx);//0
//0인 이유는  findIndex는 조건에 맞는 첫번째 인덱스만 리턴하기 때문이다.


// ---- **** 배열명.some() **** ----
// 배열명에서 판별함수의 조건에 만족하는 배열요소가 하나라도 있으면 true 를 리턴 시켜주고 조건검사를 중지한다.
// 배열명에서 판별함수의 조건에 만족하는 배열요소가 하나라도 없으면 false 를 리턴 시켜준다.

arrMember.push({userid:"teen",
    passwd:"qwer1234$",
    name:"나어려",
    age:12});

let bool = arrMember.some(item => item.age < 20);
console.log(bool);
// true

if( arrMember.some(item => item.age < 20) ) {
    console.log("회원중에 20대 미만인 회원이 존재합니다.");
}
else {
    console.log("모든 회원들의 나이는 20세 이상입니다.");
}
// 회원중에 20대 미만인 회원이 존재합니다.



// ---- **** 배열명.every() **** ----
// 배열명에서 판별함수의 조건에 만족하는 배열요소가 하나라도 없으면 false 를 리턴 시켜주고 조건검사를 중지한다.
// 배열명에서 판별함수의 조건에 만족하는 배열요소가 모두 존재해야만 true 를 리턴 시켜준다.

bool = arrMember.every(item => item.age >= 10);
console.log(bool);
// true

bool = arrMember.every(item => item.age >= 30);
console.log(bool);
// false

if( arrMember.every(item => item.age >= 10) ) {
    console.log("모든 회원들의 나이는 10세 이상입니다.");
}
else {
    console.log("회원중에 나이가 10세 미만인 회원이 존재합니다.");
}
// 모든 회원들의 나이는 10세 이상입니다.


//every 와 some 은 java 에서의
//Stream API의 allMatch() 와 anyMatch() 와 비슷하다
