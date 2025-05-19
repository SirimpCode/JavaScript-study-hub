const fruitDisplay = document.querySelectorAll(".display");
//자바스크립트에서 배열은 아래와 같이 나타냅니다.
const arr = new Array(1, 2, 3, 4, 5);
const arr2 = [1, 2, 3, 4, 5];

const fruitArr1 = [];//배열도 객체이다.
let len = fruitArr1.push("사과", "배", "귤", "포도", '수박');//반환값은 변경된 배열의 길이.
let len2 = fruitArr1.push('복슝아');//반환값은 변경된 배열의 길이.
//배열명.push() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 리턴시켜줌.
console.log('배열의길이 : ' + len + ' ' + len2);//배열의길이 : 5 6
console.log(fruitArr1);//[ '사과', '배', '귤', '포도', '수박' ]
fruitArr1.pop();
fruitArr1.pop();
fruitArr1.pop();

for (let i = 0; i < fruitArr1.length; i++) {
    console.log(fruitArr1[5] === undefined);
    // if(fruitArr1[i] !== undefined)
    // fruitDisplay[i].innerText = fruitArr1[i];
}

let html1 = `<ol style="padding-left: 0">`;
for (let i = 0; i < fruitArr1.length; i++) {
    html1 += `<li>${fruitArr1[i]}</li>`;
}
html1 += `</ol>`;
fruitDisplay[0].innerHTML = html1;

//개선된 포문처럼도 쓸수있다.
let html2 = `<ol style="padding-left: 0">`;
for (let fruit of fruitArr1) {
    html2 += `<li>${fruit}</li>`;
}
html2 += `</ol>`;
fruitDisplay[1].innerHTML = html2;
//for of 는 배열값을 가져올때 사용하는 것이고, for in 은 객체의 속성목록을 가져올 때 사용함
//for in 과 for of 의 차이점
//for of 는 배열의 요소값을 가져오는것
//for in 은 객체의 속성값을 가져오는것
//배열도 객체인데 배열의 속성은 바로 인덱스 번호 이당.

//forEach 참고 .forEach((아이템, 인덱스, 어레이)=>{}) 이렇게 사용가능하다.

let html3 = `<ol style="padding-left: 0">`;
fruitArr1.forEach((fruit, index, array) =>
    html3 += `<li>${array[index]}</li>`
);
html3 += `</ol>`;
fruitDisplay[2].innerHTML = html3;

let html5 = `<ol style="padding-left: 0">`;
fruitArr1.forEach((fruit, index, array) => {
    html5 += `<li>${fruit}</li>`;
});
html5 += `</ol>`;
fruitDisplay[3].innerHTML = html5;
fruitDisplay[4].innerHTML = html5;
fruitDisplay[5].innerHTML = html5;

// 2. 자바스크립트에서 배열은 아래와 같이 나타냅니다.
const fruitDisplayItem = document.querySelector('#fruitDisplay');
const fruitArr = ['사과', '딸기', '멜론', '참외', '수박'];//배열도 객체야
const startHtml = `<ol style="padding-left: 0">`;
const endHtml = `</ol>`;


fruitDisplayInnerHtml = () => {
    let result = startHtml;
    fruitArr.forEach(item => result += `<li>${item}</li>`);
    result += endHtml;
    fruitDisplayItem.innerHTML = result;
}
fruitDisplayInnerHtml();


const btnList = document.querySelectorAll('button');
//push맨마지막 unshift맨처음 splice특정위치  pop맨마지막 shift맨처음 splice특정위치
//splice 의 요소는 삭제할 위치, 삭제할 갯수, 추가할 요소 이다. 추가될 요소는 1번째 인수의 인덱스에 추가된다.
btnList.forEach(item =>
    item.addEventListener('click', () =>
        btnEventSwitch(item.id)
    )
)
const addVal = document.getElementById('addVal');
btnEventSwitch = itemId => {
    switch (itemId) {
        case 'btn_last_add':
            if (checkInputValueBlank())
                fruitArr.push(addVal.value);
            break;
        case 'btn_first_add':
            if (checkInputValueBlank())
                fruitArr.unshift(addVal.value);
            break;
        case 'btn_special_add':
            if (checkInputValueBlank())
                fruitArr.splice(2, 0, addVal.value);
            break;
        case 'btn_last_del':
            if (fruitArr.length > 0) {
                fruitArr.pop();
                break;
            }
            alert('삭제할 과일이 없습니다.');
            break;
        case 'btn_first_del':
            if (fruitArr.length > 0) {
                fruitArr.shift();
                break;
            }
            alert('삭제할 과일이 없습니다.');
            break;
        case 'btn_special_del':
            if (fruitArr.length > 0 && fruitArr[2] !== undefined) {
                fruitArr.splice(2, 1);
                break;
            }
            alert('2번 인덱스에 삭제할 과일이 없습니다.');
            break;

        case 'btn_reverse':
            fruitArr.reverse();
            break;
        case 'btn_sort':
            fruitArr.sort();
            break;
        case 'btn_sort_reverse':
            fruitArr.sort().reverse();
            break;
        case 'btn_asc_sort_number_fail':
            numArr.sort();//sort() 메소드는 문자열로 정렬한다.
            //sort() 메소드는 기본적으로 문자열로 정렬한다.
            // 즉, 숫자형으로 정렬하지 않는다.
            // 그래서 숫자형으로 정렬하기 위해서는
            // sort() 메소드에 정렬하는 방법을 지정해주어야 한다.
            numSortDisplay.innerHTML = numArr.toString();
            break;

        case 'btn_asc_sort_number_success':
            numArr.sort((a, b) => a - b);
            // a와 b 변수는
            // 배열의 요소를 비교하기 위한 변수이다.
            // 현재값은 a 이고
            // 다음값은 b 이다.

            // a - b 는 오름차순 정렬을 의미한다.
            // b - a 는 내림차순 정렬을 의미한다.

            // 배열요소가 숫자인 경우 문자열이 아닌 숫자로 오름차순 정렬하고자 하고자 한다라면 sort() 괄호 속에
            // function(a,b){return a-b;} 을 넣어줌으로써 해결해준다.
            // return a-b; 의 결과값이 음수 이라면  a 가 낮은 인덱스로 정렬된다.
            // return a-b; 의 결과값이  0 이라면  a 와 b 의 순서는 바뀌지 않는다.
            // return a-b; 의 결과값이 양수 이라면  b 가 낮은 인덱스로 정렬된다.

            numSortDisplay.innerHTML = numArr.toString();
            break;
        case 'btn_desc_sort_number_success':
            numArr.sort((a, b) => b - a);
            numSortDisplay.innerHTML = String(numArr);
            break;
        case 'btn_name_sort_asc':
            nameArr.sort();
            nameSortDisplay.innerHTML = String(nameArr);
            break;
        case 'btn_name_sort_desc':
            nameArr.sort().reverse();
            nameSortDisplay.innerHTML = nameArr.join();//구분자 생략시 ',' 로 적용된다.
            break;
        case 'btn_food_clear':
            foodLDisplayClear();
            break;
        case 'btn_food_list_1':
            viewFoodList(1);
            break;
        case 'btn_food_list_2':
            viewFoodList(2);
            break;
        case 'btn_food_list_3':
            viewFoodList(3);
            break;
        case 'btn_food_list_4':
            viewFoodList(4);
            break;
        case 'btn_word_list':
            showWordDisplay(true);
            break;
        case 'btn_word_clear':
            showWordDisplay(false);
            break
    }
    fruitDisplayInnerHtml();

}




checkInputValueBlank = () => {
    if (addVal.value.trim() === '') {
        alert('값을 입력하세요');
        return;
    }
    return true;
}// === 배열명.join("구분문자"); === //
/*  배열명.join("구분문자"); 는 구분문자를 사용해서 배열을 하나의 문자열로 만들어 반환해주는 것이다.
    만약에 "구분문자"를 지정해주지 않으면 즉, 배열명.join(); 으로 하면 구분문자는 자동적으로 콤마(,)로 되어진다. */
const numDisplay = document.querySelector('#number_display');
const numSortDisplay = document.querySelector('#number_sort_display');
const numArr = [10, 1, 50, 11, 109, 1004, 20];
numDisplay.innerText = numArr;

const nameTextVar = document.getElementById('irum');
const nameArr = nameTextVar.innerText.split(',');
const nameSortDisplay = document.getElementById('irum_sort_result');

console.log(nameArr)

const food = document.querySelector('#food').innerText;
const foodList = food.split(',');
const foodDisplay = document.querySelector('#food_list');
foodLDisplayClear = () => {
    foodDisplay.innerHTML = '';
}
const midHtml = '{input}';
const foodHtml = startHtml + midHtml + endHtml;

// viewFoodList1 = () =>{
//     let inputValue = '';
//     foodList.forEach(item => inputValue+=`<li>${item}</li>`);
//     foodDisplay.innerHTML = foodHtml.replace(midHtml, inputValue);
// }
// viewFoodList2 = () =>{
//     let inputValue = '';
//     foodList.reverse().forEach(item => inputValue+=`<li>${item}</li>`);
//     foodDisplay.innerHTML = foodHtml.replace(midHtml, inputValue);
// }
viewFoodList = (sortFilter) => {
    const sortArr = [];
    switch (sortFilter) {
        case 1:
            sortArr.push(...foodList);
            break;
        case 2://...배열변수 이것은 기존 배열의 각요소를 개별 인자로 전달해준다.
            sortArr.push(...foodList);//마침표 3개)를 붙이는 것은 전개 구문(Spread Syntax) 또는 전개 연산자
            sortArr.reverse();
            break;
        case 3:
            const startIndex = foodList.indexOf('피자');
            const endIndex = foodList.indexOf('육계장');
            sortArr.push(...foodList.slice(startIndex, endIndex + 1));
            break;
        case 4:
            sortArr.push(...foodList.slice(foodList.indexOf('피자')));
            break;//slice 의 두번째 인자가 없으면 마지막 인덱스까지 나온다.
    }
    const inputValue = [];
    sortArr.forEach(item => inputValue.push(`<li>${item}</li>`));
    foodDisplay.innerHTML = foodHtml.replace(midHtml, inputValue.join(''));
}
// 배열명.slice() 메서드는 인수를 통해 지정한 만큼의 요소를 잘라낸 후 배열로 반환해준다.
// 잘라내어진 원본 배열은 잘라낸 만큼 줄어드는 것이 아니라 그대로 이다.
// 이때 첫 번째 인자는 잘라낼 위치의 인덱스 숫자를 지정하며, 두 번째 인자의 인덱스 숫자의 바로 앞 요소까지를 잘라낼 요소로 지정한다.

//배열은 서로 다른 타입의 요소를 가질 수 있다.
const testArr = [1, '사과', true, null, undefined, {}, []];
testArr.forEach((item, index) => {
    console.log(index + '번째 요소와 타입  ' + item, typeof item);
})
/*
0번째 요소와 타입  1 number
01:257 1번째 요소와 타입  사과 string
01:257 2번째 요소와 타입  true boolean
01:257 3번째 요소와 타입  null object
01:257 4번째 요소와 타입  undefined undefined
01:257 5번째 요소와 타입  [object Object] object
01:257 6번째 요소와 타입   object*/

//for in 문은 객체의 속성목록을 가져올 때 사용함
const testObj = {
    name: '사과',
    color: 'red',
    price: 1000,
    weight: 200
}
for (let key in testObj) {
    console.log(key + ' : ' + testObj[key]);
    //키값을 변수로 사용할때는 . 표기법이아닌 대괄호를 사용해야한다.
    console.log(testObj.color)//key 값을 직접 넣는 이건사용가능
}
/*
name : 사과
01:275 color : red
01:275 price : 1000
01:275 weight : 200
*/


const wordElement = document.querySelector('#words');
const words = wordElement.innerText.split(',');
const wordArr = [];
words.forEach(item => {
    if (item.trim()[1].toLowerCase() === 'o')
        wordArr.push(item.trim())
});
const wordDisplay = document.querySelector('#word_list');
let wordHtml = startHtml;
wordArr.forEach(item => wordHtml += `<li>${item}</li>`);
wordHtml += endHtml;
wordDisplay.innerHTML = wordHtml;

const wordInputs = document.querySelectorAll('.word_input');

const wordArrAll = ()=>{
    const wordArrAll = [];
    words.forEach(item=>{
        wordArrAll.push(item.trim());
    })
    return wordArrAll;
}
const wordArrAllVal = wordArrAll();
showWordDisplay = (isShow) => {
    if(!isShow){
        wordDisplay.innerHTML = '';
        return;
    }
    const startWord = wordInputs[0].value;
    const endWord = wordInputs[1].value;
    const startIndex = wordArrAllVal.indexOf(startWord);
    const endIndex = wordArrAllVal.indexOf(endWord);
    console.log(startIndex+' '+endIndex);
    wordDisplay.innerText = wordArrAllVal.slice(startIndex, endIndex+1);
}




const personArr = [
    {
        photo: 'iyou.jpg',
        userId: 'iyou',
        password: '12341234a!',
        name: '아이유'
    }, {
        photo: 'kimth.jpg',
        userId: 'kimth',
        password: '12341234a!',
        name: '김태희'
    }, {
        photo: 'parkby.jpg',
        userId: 'parkby',
        password: '12341234a!',
        name: '박보영'
    }
]
const personDisplay = document.querySelector('#person_arr');

let personHtml = ``;
for (let item of personArr) {
//     personHtml += `
// <div>
//     <img src="images/${item.photo}" alt="${item.name}">
//     <h3>${item.name}</h3>
//     <p>아이디 : ${item.userId}</p>
//     <p>비밀번호 : ${item.password}</p>
//     <p>이름 : ${item.name}</p>
// </div>"
//     `
    let title;
    personHtml += `<div class="person">
<ul style="list-style-type: none; padding-left: 0">`;
    for (let key in item) {
        switch (key) {
            case 'photo':
                title = '';
                break;
            case 'userId':
                title = `아이디`;
                break;
            case 'password':
                title = `비밀번호`;
                break;
            case 'name':
                title = `이름`;
                break;
        }
        if (key === 'photo')
            personHtml += `<li><img src="images/${item[key]}" alt="${item.name}" width="130" height="150"></li>`;
        else personHtml += `<li><label class="title">${title}</label> : ${item[key]}</li>`;
    }
    personHtml += `</ul></div>`;
}


personDisplay.innerHTML = personHtml;
