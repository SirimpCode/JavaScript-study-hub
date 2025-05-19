const indexOf1 = document.getElementById('indexOf_1');
const indexOf2 = document.getElementById('indexOf_2');
const indexOf3 = document.getElementById('indexOf_3');
const indexOf4 = document.getElementById('indexOf_4');
const indexOf5 = document.getElementById('indexOf_5');
const lastIndexOf1 = document.getElementById('lastIndexOf_1');
const lastIndexOf2 = document.getElementById('lastIndexOf_2');
const lastIndexOf3 = document.getElementById('lastIndexOf_3');
const lastIndexOf4 = document.getElementById('lastIndexOf_4');
const lastIndexOf5 = document.getElementById('lastIndexOf_5');
const lastIndexOf6 = document.getElementById('lastIndexOf_6');
const lastIndexOf7 = document.getElementById('lastIndexOf_7');
const pHtml = document.getElementById("p");
const search1 = document.getElementById('search_1');
const search2 = document.getElementById('search_2');
const search3 = document.getElementById('search_3');

const includes1 = document.getElementById('includes_1');
const includes2 = document.getElementById('includes_2');
const startsWith1 = document.getElementById('startsWith_1');
const startsWith2 = document.getElementById('startsWith_2');
const endsWith1 = document.getElementById('endsWith_1');
const endsWith2 = document.getElementById('endsWith_2');

const text = pHtml.innerText.trim();
console.log(text);//쌍용강남교육센터 서울교육대학교 교육문화원
/*
        1. "문자열".indexOf("찾고자하는문자열", 출발인덱스)
        ===> 검색은 왼쪽에서 오른쪽으로 수행된다.
        ===> "문자열" 에서 "찾고자하는문자열"이 최초로 나오는 위치(인덱스)값을 리턴해준다.
             만약에 나오는 위치(인덱스)값이 없으면 -1 을 리턴해준다.
        ===> 두번째 파라미터인 출발인덱스를 생략하면 0 이 된다.
        ===> 출발인덱스에 음수가 오면 0 으로 처리된다.
        ===> 검색에 있어서 영문의 대소문자를 구별한다.
    */
//쌍용강남교육센터 서울교육대학교 교육문화원
indexOf1.innerText = text.indexOf("교육",0).toString();
indexOf2.innerText = text.indexOf("교육").toString();//시작 위치를 지정안하면 0부터 시작 즉 위랑 동일
indexOf3.innerText = text.indexOf("교육", 9).toString();//11
indexOf4.innerText = text.indexOf("교육", -2).toString();//음수가 오면 0으로 처리
indexOf5.innerText = text.indexOf("우웩").toString();//-1 읎으면 -1 반환

/*
    2. "문자열".lastIndexOf("찾고자하는문자열")
    ===> 검색은 오른쪽에서 왼쪽으로 수행된다.
    ===> "문자열" 에서 "찾고자하는문자열"이 최초로 나오는 위치(인덱스)값을 리턴해준다.
         만약에 나오는 위치(인덱스)값이 없으면 -1 을 리턴해준다.
    ===> 두번째 파라미터인 출발인덱스를 생략하면 ("문자열"의 길이-1) 이 된다.
    ===> 출발인덱스에 음수가 오면 0 으로 처리된다.
    ===> 검색에 있어서 영문의 대소문자를 구별한다.
  */
//쌍용강남교육센터 서울교육대학교 교육문화원
lastIndexOf1.innerText = text.lastIndexOf("교육",0).toString(); //역방향으로 찾으니 0이 들어가면 조회되는것이 0인덱스 하나뿐 없으므로 -1이 나옴
lastIndexOf2.innerText = text.lastIndexOf("교육").toString();//17 교육에서 '교' 의 index 가 나오는것이다.
lastIndexOf3.innerText = text.lastIndexOf("교육", 9).toString();//11
lastIndexOf4.innerText = text.lastIndexOf("교육", -2).toString();//-1 마찬가지로 0부터 시작이므로
lastIndexOf5.innerText = text.lastIndexOf("우웩").toString();//-1 읎으면 -1 반환
lastIndexOf6.innerText = text.lastIndexOf("화원", text.length-2).toString();//20 실제 index 의 끝번호보다 큰값이 들어가도 그냥 맨뒤부터 조회됨
lastIndexOf7.innerText = text.lastIndexOf("교육", -2).toString();//-1 마찬가지로 0부터 시작이므로
/*
        3. "문자열".search("찾고자하는문자열")
        ===> "문자열" 에서 "찾고자하는문자열"이 최초로 나오는 위치(인덱스)값을 리턴해준다.
    */
search1.innerText = text.search("교육").toString();//4
/*
        4. "문자열".search(정규표현식)
        ===> "문자열" 에서 정규표현식에 일치하는 글자가 최초로 나오는 위치(인덱스)값을 리턴해준다.
    */
//정규식
const text2 = 'korea 대한민국 SEOUL 서울';
search2.innerText =text2.search(/[가-힣]/g).toString();//6


search3.innerText = text2.search(/[A-Z]/gi).toString();//0
//search() : indexOf() 와 동일한 기능을 수행한다.

/*
        5. "문자열".includes("찾고자하는문자열")
           => ES6 (2015)임
           ===> "문자열" 에서 "찾고자하는문자열" 포함되어 있으면 true, 포함되어 있지 않으면 false 를 리턴해줌.
    */
includes1.innerText = text.includes("<UNK>").toString();//false
includes2.innerText = text.includes("서울").toString();//true


/*이걸로 시작하냐 이걸로 끝나냐 에 따라 boolean 값을 반환*/
startsWith1.innerText = text.startsWith("<UNK>").toString();//false
startsWith2.innerText = text.startsWith("쌍용").toString();//true
endsWith1.innerText = text.endsWith("<UNK>").toString();//false
endsWith2.innerText = text.endsWith("문화원").toString();//true