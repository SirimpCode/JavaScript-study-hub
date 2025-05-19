const displayView = document.getElementById("view_pass");
const scoreAll = document.querySelectorAll('.score');
const allBtn = document.querySelectorAll(".btn");
//배열의 메소드인 map() 메서드는 반복문을 돌며 배열 안의 요소1대1로 짝지어
//새로운 배열을 만들어주는 메서드이다.

const pointArr = [100, 85, 93, 76, 50];
const resultArr = [];
pointArr.forEach(point => {
    if (point >= 70)
        resultArr.push(point);
})
//map 사용
const resultArr2 = pointArr.map((item, index, arr) => {
    /*forEach 처럼 index와 arr는 생략 가능 */
    return item >= 70;
})
const test = pointArr.forEach(point => {
    return point >= 70;//foreach는 return을 사용하지 않음 void 함수이다.
})
const arrStudent = [
    {hrkbun: '02001', name: '말티즈', kor: 90, eng: 80, math: 70},
    {hrkbun: '02002', name: '푸들', kor: 100, eng: 90, math: 90},
    {hrkbun: '02003', name: '보더콜리', kor: 86, eng: 67, math: 56},
    {hrkbun: '02004', name: '닥스훈트', kor: 100, eng: 70, math: 90},
    {hrkbun: '02005', name: '이시후', kor: 50, eng: 40, math: 30}
]
const arrTotal1 = arrStudent.map(item=>item.eng+item.kor+item.math);
console.log(arrTotal1);

const avg = arrTotal1.map(item=>
    (item/3).toFixed(1)//반올림해서 문자열로 반환
)
console.log('평균'+avg);

const arrGrade = avg.map(item=>{
    const score = Math.trunc(parseInt(item)/10);
    console.log(score);
    switch(score){
        case 9:
            return 'A';
        case 8:
            return 'B';
        case 7:
            return 'C';
        case 6:
            return 'D';
        default:
            return 'F';
    }
})
console.log(arrGrade);

let html = `<table>
<tr>
<th>학번</th>
<th>이름</th>
<th>국어</th>
<th>영어</th>
<th>수학</th>
<th>총점</th>
<th>평균</th>
<th>학점</th>
</tr>`;

arrStudent.forEach((item,index) => {
    html += `
    <tr>
<td>${item.hrkbun}</td>
<td>${item.name}</td>
<td>${item.kor}</td>
<td>${item.eng}</td>
<td>${item.math}</td>
<td>${arrTotal1[index]}</td>
<td>${avg[index]}</td>
<td>${arrGrade[index]}</td>
</tr>
    `
})
html += `</table>`

document.querySelector(('#view')).innerHTML = html;




allBtn.forEach(el => {
    el.addEventListener("click", () => {
        switch (el.id) {
            case "btn_pass":
                clickPassBtn();
                break;
            case "btn_clear":
                clickClearBtn();
                break;
            case "btnSearch":
                clickSearchBtn();
                break;
        }
    })
})

changeColor = (isSuccess, scoreElement) => {
    scoreElement.forEach(item => {
        item.parentElement.style.backgroundColor = isSuccess ? '#7676FAFF' : '#C58A8AFF';
    })
}


clickPassBtn = () => {
    const successEl = [];
    const failEl = [];
    scoreAll.forEach(scoreElement => {
        scoreElement.parentElement.style.transition = "1s";
        const scoreStr = scoreElement.innerText;
        const score = parseInt(scoreStr);
        if (score >= 70)
            successEl.push(scoreElement)
        else
            failEl.push(scoreElement)
    })
    changeColor(true, successEl);
    changeColor(false, failEl);
}

if('10' === '10'){

}
clickClearBtn = () => {
    scoreAll.forEach(scoreElement => {
        scoreElement.parentElement.style.backgroundColor = '';
    })
}
// 엘리먼트(태그).children 은 해당 엘리먼트(태그)의 자식엘리먼트(태그)를 배열의 형태로 반환시켜준다.
const searchInput = document.getElementById("searchInput");
clickSearchBtn = () => {
    const searchValue = searchInput.value;
    if (searchValue.length === 0) {
        alert('검색어를 입력하세요');
        return;
    }
    for(let scoreElement of scoreAll){
        const nameElement = scoreElement.parentElement.children.item(0)
        if(nameElement.innerText === searchValue){
            const score = parseInt(scoreElement.innerText);
            passingFunc(score>=70);
            return;
        }
    }
    alert('검색된 학생이 없습니다.');
}
passingFunc = (isPassing) =>{
    if(isPassing) alert('합격입니다.');
    else alert('ㅋㅋㅋㅋㅋㅋㅋ불합격');
}