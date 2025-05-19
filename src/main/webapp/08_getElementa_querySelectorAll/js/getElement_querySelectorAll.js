//자바스크립트 에서 태그 하나하나를 객체로 인식함
const checkboxList = document.querySelectorAll('input[type="checkbox"]');
//NodeListOf<Element> 타입으로 나온다.
const divList = document.querySelectorAll('div');
const divList2 = document.getElementsByTagName('div');
//HTMLCollection 타입으로 나온다.
const checkBtn1 = document.getElementById('btn_ok_1');
const checkBtn2 = document.getElementById('btn_ok_2');
const spanList = document.querySelectorAll('span');
console.log('divList 의 길이 : '+divList.length);
for (let i = 0; i < divList.length; i++) {
    divList[i].style.display = 'inline-block';
    divList[i].style.width = '200px';
    divList[i].style.height = '150px';
    divList[i].style.border = '1px solid gray';
    divList[i].style.margin = '20px';
    divList[i].style.backgroundColor = divList[i].innerText;
    divList[i].style.color = 'white';
}

const btnList = document.querySelectorAll('button');
for (let i = 0; i < btnList.length; i++) {
    btnList[i].style.width = '100px';
    btnList[i].style.height = '50px';
    btnList[i].style.margin = '20px';
}


//클래스네임 사용 HTMLCollection 타입으로 나온다.
// NodeList 와의 차이점은
// 1. HTMLCollection 은 실시간으로 DOM 에서 변경된 내용을 반영한다.
// 2. NodeList 는 실시간으로 DOM 에서 변경된 내용을 반영하지 않는다.
// 3. HTMLCollection 은 forEach() 메소드를 사용할 수 없다.
// 4. NodeList 는 forEach() 메소드를 사용할 수 있다.
const classList = document.getElementsByClassName('btn_navy');

for (let i = 0; i < classList.length; i++) {
    classList[i].style.backgroundColor = 'navy';
    classList[i].style.color = 'white';
}
//네임속성을 가지고 선택자를 잡는방법 이건 NodeList 타입으로 나온다.
const nameList = document.getElementsByName('hobby');
const hobbySpans = document.querySelectorAll('.hobby_val');
// checkboxList.forEach(checkbox =>{
//     console.log(checkbox.value);
//     checkbox.innerHTML = checkbox.value;
// })
// for(let i = 0; i < checkboxList.length; i++){
//     hobbySpans[i].innerText = checkboxList[i].value;
// }
const hobbyLis = document.querySelectorAll('.bobby_li');
hobbyLis.forEach(hobbyLi => {
    hobbyLi.style.listStyle = 'none';
    hobbyLi.parentElement.style.paddingLeft = '0';
    const inputChild = hobbyLi.querySelector('input');
    const spanChild = hobbyLi.querySelector('span');

    spanChild.innerText = inputChild.value;
    const labelChild = hobbyLi.querySelector('label');
    labelChild.style.display = 'inline-block';
    labelChild.style.width = '70px';
    labelChild.style.color = 'red';
    labelChild.style.fontWeight = 'bold';


})


let test ={};
spanList.forEach(span =>{
    if(span.className === 'hobby_val')
        test += span;
})
console.log(test);
funcClear = ()=> {
    spanList.forEach(item=> {
        if(item.id === 'result1' || item.id === 'result2') {
            item.innerHTML = '';
        }
    })
    checkboxList.forEach(item=> {
        item.checked = false;
    })
}

checkBtn2.onmouseover=()=>{
    backGroundChange(checkBtn2, true);
}
checkBtn2.onmouseout=()=>{
    backGroundChange(checkBtn2,false);
}

checkBtn1.onmouseover = () =>{
    backGroundChange(checkBtn1, true);
}
checkBtn1.onmouseout = () =>{
    backGroundChange(checkBtn1,false);
}
backGroundChange = (btn,overOrOut) => {
    btn.style.backgroundColor = overOrOut?'red':'green';
    btn.style.transition = 'all 1s';
}


checkBtn1.onclick = ()=>{
    checkElement(1);
}
checkBtn2.onclick = ()=>{
    checkElement(2);
}

checkElement = (num) => {
    spanList.forEach(item => {
        if(item.id === 'result'+num) {
            item.innerHTML = createCheckResult(item);
        }
    })
}
createCheckResult = item => {
    let result = item.innerText;
    for (let i = 0; i < checkboxList.length; i++)
        if (checkboxList[i].checked && !item.innerText.includes(checkboxList[i].value))
                result += ', '+checkboxList[i].value;

    if (result.startsWith(', ')) result = result.substring(2);
    return result;
}

// === 5. 자바스크립트에서 CSS 선택자를 가지고 선택자를 잡는 방법 === //
// document.querySelectorAll("CSS 선택자");
// document.querySelectorAll("CSS 선택자"); 을 실행하면 NodeList 타입(배열과 거의 비슷함)으로 반환해준다. 즉, 쉽게 말하자면 객체(object)가 여러개인 형태로 반환해준다.

// === 6. 자바스크립트에서 CSS 선택자를 가지고 선택자를 잡는 방법 === //
// document.querySelector("CSS 선택자");
// document.querySelector("CSS 선택자");  을 실행하면 리턴타입은 1개의 객체(object)이다.

const liFoodList = document.querySelectorAll('#food > ol:nth-child(2) > li');
const img = document.querySelector('img#food_image');
const imgFoodArr = ["jjm.png","jjbong.png","tangsy.png","palbc.png"];
//자바스크립트에서 배열은 []요 모양이다.

for (let i = 0; i < liFoodList.length; i++) {
    liFoodList[i].onmouseover = ()=>{
        liFoodList[i].style.backgroundColor = 'blue';
        img.style.display = '';
        console.log('images/'+liFoodList[i]);
        img.src = 'images/'+imgFoodArr[i];
        img.width = '150';//px 을 넣으면 안됨 속성값에 그냥 숫자만 넣어
        img.height = '110';
    }
    liFoodList[i].onmouseout = ()=>{
        img.style.display = 'none';
        liFoodList[i].style.backgroundColor = '';
    }

}
// 체크박스확인1 버튼을 클릭하면 name 값이 hobby 인 체크박스에 체크가 되어진것만
// value 을 나열해서 span태그의 id값이 result1 인 곳에 출력하세요...