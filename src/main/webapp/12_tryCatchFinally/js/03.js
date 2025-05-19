const myDiv = document.getElementById("mydiv");
const errorDiv = document.getElementById("error");
try{
    funcPlus(2,3);
}catch(e){
    alert(e);//ReferenceError: funcPlus is not defined
    console.log(e);//ReferenceError: funcPlus is not defined at 02.js:3:5
    errorDiv.innerHTML = `<span style="color: red">오류발생 : ${e}</span>`;
}//오류발생 : ReferenceError: funcPlus is not defined
finally {
    myDiv.innerHTML = '<span>메롱</span>';
}
