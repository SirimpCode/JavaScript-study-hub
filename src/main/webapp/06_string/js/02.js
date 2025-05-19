/*
       자바스크립트에서 문자열을 발췌하여 리턴하는 메소드는 3가지가 있다.
       3가지 모두 원본 문자열은 변경되지 않고 그대로 유지하게 된다.

       1. "문자열".slice(startIndex, endIndex)
      ===> 문자열에서 startIndex 부터 endIndex 앞 까지만 발췌하여 리턴해준다.
           역방향을 사용시 startIndex 와 endIndex 에 -를 사용하면 된다.

         원본이 변하지않음.
*/
const sliceForward = document.getElementById("slice_forward");
const sliceBackward = document.getElementById("slice_reverse");
const substring = document.getElementById("substring");
const substrForward1 = document.getElementById("substr_forward1");
const substrForward2 = document.getElementById("substr_forward2");
const substrBackward1 = document.getElementById("substr_reverse1");
const substrBackward2 = document.getElementById("substr_reverse2");
const strHtml = document.getElementById("str");
const str = "Apple, Banana, Kiwi";

let part = str.slice(7, 13)// Banana

sliceForward.innerText = part;
part = str.slice(-12, -6)// Banana 이렇게 뒤에서부터 역방향으로 찾아갈수도있다.
sliceBackward.innerText = part;//Banana 똑같음
/*
2. "문자열".substring(startIndex, endIndex)
===> 문자열에서 startIndex 부터 endIndex 앞 까지만 발췌하여 리턴해준다.
    위의 slice 와 같지만 차이점은 - 를 사용하여 역방향을 사용할 수 없다는 것이다.
    마찬가지로 원본은 변하지않음.
*/
part = str.substring(7,13)// Banana
substring.innerText = part;//Banana



/*
          3. "문자열".substr(startIndex, length)
         ===> 문자열에서 startIndex 부터 length 길이만큼 발췌하여 리턴해준다.
              출발점을 역방향으로 하려면 -startIndex 을 사용하면 된다.

         ===> "문자열".substr(startIndex)
             문자열에서 startIndex 부터 문자열 끝까지 발췌하여 리턴해준다.
             출발점을 역방향으로 하려면 -startIndex 을 사용하면 된다.
             substring 과의 차이점은
             2번째 인수의 수 만큼 뽑아온다.
             substring 은 2번째 인수의 인덱스 까지 뽑아오는 거였음.

             하지만 최근에는 사용 안하는 추세다 앞으로 없어질 예정
     */

part = str.substr(7, 6)// Banana
substrForward1.innerText = part;//Banana

part = str.substr(7)// Banana, Kiwi
substrForward2.innerText = part;//Banana, Kiwi
//2번째 인수인 length 값이 비어있다면 첫번째 인수인 startIndex 부터 끝까지 다 가져온다.
part = str.substr(-12, 6)// Banana
substrBackward1.innerText = part;//Banana
part = str.substr(-12)// Banana, Kiwi
substrBackward2.innerText = part;//Banana, Kiwi
//뒤에서 부터 12번째에 위치한 인덱스부터 끝까지 가져온다.

strHtml.innerText = str;
//원본은 변하지 않음.

