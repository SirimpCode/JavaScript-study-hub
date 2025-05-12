const name = document.getElementById("name");
const rotate = document.getElementById("rotate");
function showName(){
    rotate.classList.add('active');
    document.write('<div style="font-size: 100px; color: #0f0fc5">자바스크립트 공부를 합니다.</div>' +
        '<div id="jsStudy">JavaScript study</div>')
    //기존의 내용을 지우고 새로운 내용이 추가된다.
    //document.write() 를 실행하면 모든 HTML 내용물을 지우고 새로운 내용을 추가한다.
}
function hideName(){
    name.innerHTML = '';
}