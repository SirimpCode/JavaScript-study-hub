const name = document.getElementById("name");
const rotate = document.getElementById('rotate');
function  showName()  {
    console.log(name);
    window.alert("Hello World!");
    //일반적으로 window 는 생략한다.
    alert("좋은 하루\n행복한 하루 보내세여");
    name.innerHTML = '이시후';

}
function hideName() {
    name.innerHTML = '';
}