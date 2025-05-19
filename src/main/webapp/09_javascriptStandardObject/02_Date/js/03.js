const arr_quizData = [
    {
        question: "문제1. 대한민국의 수도는?",
        answers: {
            1: "부산",
            2: "수원",
            3: "서울",
            4: "인천"
        },
        correct: 3
    },
    {
        question: "문제2. 1+1은?",
        answers: {
            1: "1",
            2: "2",
            3: "3",
            4: "4"
        },
        correct: 2
    },
    {
        question: "문제3. 미국의 수도는?",
        answers: {
            1: "뉴욕",
            2: "파리",
            3: "로스엔젤러스",
            4: "워싱턴",
            5: "런던"
        },
        correct: 4
    },
    {
        question: "문제4. 사진속의 인물의 이름은?<div><img src='images/iyou.jpg'/></div>",
        answers: {
            1: "엄정화",
            2: "아이유",
            3: "김태희",
            4: "박보영"
        },
        correct: 2
    }
];

const quizDiv = document.querySelector('div#quiz_display');
//퀴즈 문항을 html로 만들기 시작
let html = '';

arr_quizData.forEach((element, index) => {
    html += `<p id="quiz${index}">${element.question}</p>`
    html += '<ol>';
    // 어떤 객체의 속성(키)들을 모두 불러올때는 for문에서 of 가 아니라 in 을 사용한다.
    for (const [key, value] of Object.entries(element.answers)) {
        // Object.entries() : 객체의 속성과 값을 배열로 변환 즉 element.answers를 Object.entries()로 변환하면
        // [[1, "부산"], [2, "수원"], [3, "서울"], [4, "인천"]] 형태로 변환된다.
        // 즉, key는 1,2,3,4 이고 value는 부산, 수원, 서울, 인천 이다.
        // 첫바퀴때는 key는 1, value는 부산 이고 되는것
        html += `<li><input type="radio" style="cursor: pointer" name="quiz${index}" id="quiz${index}_${key}" value="${key}"><label for="quiz${index}_${key}" style="cursor: pointer">${value}</label></li>`;
        // 객체명.속성명 은 속성명에는 변수가 사용될 수 없다.
        // 객체명[속성명] 은 속성명에 변수가 사용될 수 있다.
        // ${item.answers[property_name]} 는 "부산" 과 같은 것을 말하는 것이다.

        // 라디오는 반드시 name 값이 동일해야 한다.
        // value 값은 item.answers 의 속성명인 1 2 3 4 로 되어진다.
    }
    html += '</ol>';
})
quizDiv.innerHTML = html;
// 끄읕
const questionList = quizDiv.querySelectorAll('p');
const answerList = quizDiv.querySelectorAll('ol');


const userAnswer = () => {
    return Array.from(answerList).map(element => {
        const userChecked = Array.from(element.children).map(li => {
            const input = li.querySelector('input[type="radio"]');
            //선택한것만 가져오기 아래것 참고
            // const input = li.querySelector('input[type="radio"]:checked'); 선택한것만 뽑아오는것

            if (input.checked) {
                return {[input.name]: input.value};
            }
        })
        return userChecked.find(checked => {
            return !(checked === undefined);
        })
        // userChecked.filter()
    })
}
const victoryImg = document.getElementById('reward');
const scoreDiv = document.getElementById('scoreDisplay');

btnSubmitEvent = (isTimeout) => {
    const userAnswerVar = userAnswer();

    userAnswerVar.forEach((item, index) => {
        if (item === undefined) {
            userAnswerVar.splice(index, 1,{[`quiz${index}`]: '0'});
            if (!isTimeout)
                alert(index + 1 + '번 문제를 풀지 않았습니다.\n' +
                    '시간 내에 체크후 제출 해주세요.\n' +
                    '시간 초과시 체크 안된 문제는 오답 처리 됩니다.');
        }
    })
    if (!isTimeout && userAnswerVar.length !== arr_quizData.length) return;
    clearInterval(timerInterval);//타이머 정지
    alert(!isTimeout ? '제출되었습니다.' :
        '시간초과! 제출되었습니다. \n' +
        '체크 안된 문제는 오답 처리 됩니다.');
    btnSubmit.disabled = true;//버튼 비활성화
    let score = 0;
    arr_quizData.forEach((element, index) => {
        const correctAnswer = element.correct === parseInt(userAnswerVar[index][`quiz${index}`]);

        const questionPTag = document.getElementById(`quiz${index}`);
        const correctHtmlTag = `정답 : ${questionPTag.innerHTML}<span style="margin-left: 35px; color: {replace}; font-weight: bold; font-size: 30px">${element.correct}</span>
           <span style="margin-left: 15px; font-size: 15px; color: {replace}">[ ${element.answers[element.correct]} ]</span>`;
        const question = index === 3 ?
            questionPTag.nextElementSibling.nextElementSibling.nextElementSibling :
            questionPTag.nextElementSibling;
        if (correctAnswer) {//nextElementSibling 바로 아래있는 요소 선택
            question.classList.add('yes');
            score++;
            questionPTag.innerHTML = correctHtmlTag.replaceAll('{replace}', 'blue');
            return;
        }
        question.classList.add('no');
        questionPTag.innerHTML = correctHtmlTag.replaceAll('{replace}', 'red');




        //
        // span.style.position = 'absolute'; // 부모 요소 기준으로 위치 설정
        // span.style.top = '0';
        // span.style.left = '0';
        // span.style.width = '100%';
        // span.style.height = '100%';
        // span.style.pointerEvents = 'none'; // 클릭 이벤트 방지
        // span.style.background = 'linear-gradient(-45deg, transparent 49%, red 49%, red 51%, transparent 51%)';
    })
    if(score === 4){
        scoreDiv.style.opacity = '0.7';
        quizDiv.style.position = 'static';
    }

}


const btnSubmit = document.querySelector('button#btnSubmit');


btnSubmit.addEventListener('click', () => btnSubmitEvent(false));

// btnSubmit.addEventListener('click', () => {
//     // userAnswer();
//     console.log(userAnswer());
//     // confirmClick();
// })

const timerDiv = document.getElementById('timer');
const startTime = new Date(); // 10초
const restraintTime = new Date(10 * 1000);
const timer = () => {
    const liveTime = new Date();
    const proceedingTime = new Date(liveTime - startTime);
    const elapsedTime = new Date(restraintTime - proceedingTime);
    if (elapsedTime >= 0) {
        timerDiv.innerText = `${elapsedTime.getMinutes().toString().padStart(2, '0')}분 ${elapsedTime.getSeconds().toString().padStart(2, '0')}.${elapsedTime.getMilliseconds().toString().padStart(3, '0')}초`;
        return;
    }
    timerDiv.innerText = `시간초과!`;
    clearInterval(timerInterval);
    btnSubmit.disabled = true;//이거랑 아래랑 동일동작
    btnSubmitEvent(true);
    // btnSubmit.setAttribute('disabled', 'true');
}
const timerInterval = setInterval(timer, 1);
