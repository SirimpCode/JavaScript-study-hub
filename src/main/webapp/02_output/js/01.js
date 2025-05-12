const name = document.getElementById("name");
const rotate = document.getElementById("rotate");
function showName(){
    rotate.classList.add('active');
    name.innerHTML = '이시후';
}
function hideName(){
    name.innerHTML = '';
}