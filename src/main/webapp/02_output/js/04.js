const name = document.getElementById("name");
const rotate = document.getElementById('rotate');
function  showName()  {

    console.log(name);//여기는 <span></span>으로 비어있는상태
    const isConfirm = confirm("확인누를꺼야?")
    if(!isConfirm){
        alert("취소 되었습니다. 이름칸을 비웁니다.");
        name.innerHTML = '';

        console.log(name);//여기는 위의 ''으로 인해<span></span>으로 비어있는상태
    }
    name.innerHTML = '2시후';

    console.log(name);//여기는 위의 '2시후'로 인해<span>2시후</span>으로 바뀐상태

}
function hideName() {
    if(confirm('진짜 지울꼬야?')){
        alert('이름칸을 비웁니다.');
        name.innerHTML = '';
        return;
    }
    alert('이름칸을 비우지 않습니다.');
}
