const toUpperCase = document.getElementById("toUpperCase");
const str = document.getElementById("str");
const toLowerCase = document.getElementById("toLowerCase");
const concat = document.getElementById("concat");
const plus = document.getElementById("plus");
const trim = document.getElementById("trim");
const padStart = document.getElementById("padStart");
const padEnd = document.getElementById("padEnd");
const chatAt = document.getElementById("charAt");
const ch = document.getElementById("ch");
const quiz = document.getElementById("quiz");
/*
       1. "문자열".toUpperCase()
      ===> 문자열을 모두 대문자로 변경하여 리턴해준다.
   */
const value = "Please visit Microsoft! ORACLE / Microsoft MS-SQL";
let newStr = value.toUpperCase();
toUpperCase.innerText = newStr;//PLEASE VISIT MICROSOFT! ORACLE / MICROSOFT MS-SQL
str.innerText = value + ' 원본';//원본은 변경 안됨.
toLowerCase.innerText = newStr.toLowerCase();
concat.innerText = value.concat("힣?"," 안녕하세요", "가운데", "반갑습니다.");

//합쳐버리기

newStr = '          '+ value + '          ';
plus.innerText = newStr;
trim.innerText = newStr.trim();//앞뒤 공백 제거
//trimStart() : 앞 공백 제거
//trimEnd() : 뒤 공백 제거
//trimLeft() : 앞 공백 제거 곧 삭제됨
//trimRight() : 뒤 공백 제거 곧 삭제됨

console.log(newStr.padStart(newStr.length+10,"*"));//*로채워

padStart.innerText = value.padStart(100, "0");//100자리를 만들고 앞에 0으로 채워라
//만약 기존값이 첫번째 인수의 수보다 길면 그냥 원본을 리턴한다.
padEnd.innerText = value.padEnd(100, "0");//100자리를 만들고 뒤에 0으로 채워라

chatAt.innerText = value.charAt(0)+value.charAt(20);//0번째 인덱스의 문자+20번째 인덱스의 문자
//charAt() : 문자열에서 인덱스에 해당하는 문자를 리턴해준다.
//charCodeAt() : 문자열에서 인덱스에 해당하는 문자의 아스키코드값을 리턴해준다.
//String.fromCharCode() : 아스키코드값을 문자로 변환해준다.

const test = " 안 녕 하 세 요 ";
console.log(test);
console.log(test.replaceAll(" ", ""));

const text7 = "HELLO WORLD";
ch.innerText = text7.charAt(0);
ch.innerText = text7[1]; //대괄호로 접근도 가능 chatAt 쓸일 없을듯

//quiz
// let strQuiz = "";
// for(let i = 0; i < text7.length; i++){
//     if(text7[i] === " "|| text7[i]==='W' || i === 0) {
//         strQuiz += text7[i];
//         continue;
//     }
//     strQuiz +=  "-"+text7[i];
// }

//삼항연산자 사용
let strQuiz2 = "";
for(let i = 0; i < text7.length; i++)
    strQuiz2 += (text7[i] === " "|| text7[i]==='W' || i === 0) ? text7[i] : "-"+text7[i];


quiz.innerText = strQuiz2;
//H-E-L-L-O W-O-R-L-D





