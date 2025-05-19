const korCheckbox = document.getElementsByName("product_kor");
const oldCheckbox = document.getElementsByName("product_old");
const usaCheckbox = document.getElementsByName("product_usa");
const usaAllCheckbox = document.getElementById("allCheck");

//태그에 onclick="funcAllCheck(this.checked)" 추가 안했을때
// usaAllCheckbox.addEventListener('click',  function () {
//     if(this.checked)
//         usaCheckbox.forEach(element=>element.checked = true);
//     else
//         usaCheckbox.forEach(element=>element.checked = false);
//
// });

//oncolick="funcUsaCheck(this)" 추가했을때
//radio 처럼 한개만선택되도록 이거 화살표 함수로 하니까 에러남.
function onlyOneCheck (obj){
    // const checkboxList = document.querySelectorAll('input[name="product_old"]');
    oldCheckbox.forEach(el => {
        if(el !== obj){
            el.checked = false;
        }
    })
}

function funcAllCheck(isChecked){
    if(isChecked)
        usaCheckbox.forEach(element=>element.checked = true);
    else
        usaCheckbox.forEach(element=>element.checked = false);
}
function funcUsaCheck(isChecked){
    if(!isChecked){
        usaAllCheckbox.checked = false;
        return;
    }
    const isAllChecked = [...usaCheckbox].every((checkbox) => checkbox.checked);
    if(isAllChecked)
        usaAllCheckbox.checked = true;
}