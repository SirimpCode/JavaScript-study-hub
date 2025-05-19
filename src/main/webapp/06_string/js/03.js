const replace1 = document.getElementById("replace_1");
const replace2 = document.getElementById("replace_2");
const replace3 = document.getElementById("replace_3");
const strHtml = document.getElementById("str");
/*
       1. "문자열".replace("기존문자열", "새로운문자열")
      ===> 문자열에서 첫번째로 나오는 "기존문자열" 을 "새로운문자열" 로 변경하여 리턴해준다.
          "기존문자열" 은 대소문자를 구분한다.
          원본 문자열은 그대로 변경되지 않고 그대로 유지하게 된다.
   */

const str = 'Please visit Microsoft! ORACLE / Microsoft MS-SQL';
let newStr = str.replace("Microsoft", "Google");
replace1.innerText = newStr;//Please visit Google! ORACLE / Microsoft MS-SQL
newStr = str.replace(/Microsoft/g, "Google");//global : 전역검색 전부다바꿈
strHtml.innerText = str+" 원본";
replace2.innerText = newStr;//Please visit Google! ORACLE / Google MS-SQL
newStr = str.replace(/miCrosoft/i, "Google");//ignore case : 대소문자 구분안함
replace3.innerText = newStr;//Please visit Google! ORACLE / Microsoft MS-SQL

console.log(str.replace(/MiCroSoft/gi, "헤헿헤헿"));//Please visit 헤헿헤헿! ORACLE / 헤헿헤헿 MS-SQL
//g와 i를 같이 사용하면 대소문자 구분없이 전부다 바꿔준다.
//2번째 것만 바꾸려면
console.log(str.replaceAll("Microsoft", "우해해햏"));//Please visit 우해해햏! ORACLE / 우햏해햏 MS-SQL
//replaceAll 과 replace 의 차이점은 replaceAll 은 모든것을 바꿔준다.

