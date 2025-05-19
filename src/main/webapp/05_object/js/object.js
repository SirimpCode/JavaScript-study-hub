const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");

const member = {
    id : "sihu",
    password : "12341234a!",
    name: "이시후",
    address :"서울시 강남구",
    phone : "010-1234-5678",
    // info1 : ()=> this.id+" " + this.name+' ' + this.address+' ' + this.phone
    // 화살표 함수는 this를 바인딩하지 않는다. 여기서의 this는 전역객체를 가르키게된다.
    info1: function () {
        return this.id + " " + this.name + " " + this.address + " " + this.phone;
    },
    info2 (){//이크마6에서 처음나옴 이렇게도 함수작성이가능
        return this.id + " " + this.name + " " + this.address + " " + this.phone;
    },//속성 값이 함수인 경우 function 없이 함수명만 적어도 된다.
    info3 :  (() => {
        return this.id + " " + this.name + " " + this.address + " " + this.phone;
    }).bind(this)

};
div1.innerHTML = member.info1;
//()=> this.id+" " + this.name+' ' + this.address+' ' + this.phone
div2.innerText = member.info1();
//sihu 이시후 서울시 강남구 010-1234-5678

//const 이지만 member.name = "바꿈" 으로 바꿀수있다.
//객체자체를 수정할순없지만 필드값은 수정이 가능하다.
member.name = "바꿈";
div3.innerText = member.info1();
//sihu 바꿈 서울시 강남구 010-1234-5678

div4.innerText = member.info2();
//sihu 바꿈 서울시 강남구 010-1234-5678

console.log(member.info3());