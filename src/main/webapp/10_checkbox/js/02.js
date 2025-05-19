const korCheckbox = document.getElementsByName("product_kor");
const oldCheckbox = document.getElementsByName("product_old");
const usaCheckbox = document.getElementsByName("product_usa");
const usaAllCheckbox = document.getElementById("allCheck");


usaAllCheckbox.addEventListener('click', function () {
    if (this.checked)
        usaCheckbox.forEach(element => element.checked = true);
    else
        usaCheckbox.forEach(element => element.checked = false);

});

usaCheckFunc = (isChecked) => {
    if (!isChecked) {
        usaAllCheckbox.checked = false;
        return;
    }
    const isAllCheck = [...usaCheckbox].every(checkbox => checkbox.checked);
    if (isAllCheck) usaAllCheckbox.checked = true;
}

usaCheckbox.forEach(element =>
    element.addEventListener('change', () => usaCheckFunc(element.checked)));

oldCheckFunc = (element) => {
    oldCheckbox.forEach(el => {
        if (el !== element) {
            el.checked = false;
        }
    })

}

oldCheckbox.forEach(element =>
    element.addEventListener('change', () => {
        if (element.checked)
            oldCheckFunc(element)
    }));