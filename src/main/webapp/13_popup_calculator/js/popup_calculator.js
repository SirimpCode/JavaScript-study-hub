const containerDiv = document.getElementById("container");
const viewDiv = document.getElementById("view");

const productArr = [
    {
        productId : 'led',
        productName : 'LED 모니터',
        image : 'monitor.jpg',
        price : 200000,
        option : [
            {
                optionId : 'HDMI',
                optionName : 'HDMI 케이블',
                price : 10000
            },
            {
                optionId: '3DGlasses',
                optionName: '3D 안경',
                price: 20000
            }
        ]
    },
    {
        productId : 'cam',
        productName : '캠코더',
        image : 'cam.jpg',
        price : 500000,
        option : [
            {
                optionId : 'tripod',
                optionName : '3각 받침대',
                price : 20000
            },
            {
                optionId: 'remoteControl',
                optionName: '리모컨',
                price: 30000
            },
            {
                optionId: 'charger',
                optionName: '충전기',
                price: 50000
            }
        ]
    }
];
const getProductById = (id) => productArr.find(product => product.productId === id);


const html = `
<table id="tbl">
    <thead>
        <tr>
            <th colspan="4">제품 선택</th>
        </tr>
        <tr>
            <th width = '22%'>제품사진</th>
            <th width = ''>제품정보</th>
            <th width = '33%'>부속품</th>
            <th width = '15%'>주문금액</th>
        </tr>
    </thead>
    <tbody>
        {replace}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">주문총액</td>
            <td id="totalPrice">0</td>
        </tr>
    </tfoot>
</table>`;


const trTagArr = [];
productArr.forEach((element, index) => {

    const optionTagArr = [...element.option].map(option =>
         `<li><label for="${option.optionId}">${option.optionName}</label><input type="checkbox" id="${option.optionId}" class="${element.productId}" value="${option.price}"/></li>`
    )



    const trTag =
        `<tr>
<td style="text-align: center"><img src="images/${element.image}" onclick="openPopup(this.src)" alt="제품사진"/></td>
<td><ul>
<li><label>제품명 : </label>${element.productName}</li>
<li><label>가격 : </label>${element.price.toLocaleString()}원</li>
<li><label for="${element.productId}">주문수량 : </label><input id="${element.productId}" class="${element.productId}" data-price="${element.price}" type="number" min="0" max="20" value="1"/></li>
</ul>
</td>
<td>
<ul>
${optionTagArr.join('')}
</ul>
</td>
<td>
    <p id="${element.productId}P"></p>
</td>
         </tr>
        `;
    trTagArr.push(trTag);
})


viewDiv.innerHTML = html.replace('{replace}', trTagArr.join(''));


const allInput = document.querySelectorAll('input');
const totalPriceTag = document.getElementById('totalPrice');
// const quantityInput = document.querySelectorAll('input[type=number]');

allUnchecked = (className) => {
    document.querySelectorAll(`input[type=checkbox].${className}`).forEach(input => {
        input.checked = false;
    })
}

orderChangeValue = (input) => {

    if(input.type==='number'){
        if (input.value === '0') allUnchecked(input.className);
        if (input.value < 0 ) input.value *= -1;
        if (input.value > 20) input.value = 20;
    }


    switch (input.className) {
        case 'led':
            orderAmount(input,'ledP');

            break;
        case 'cam':
            orderAmount(input, 'camP');
            break;
    }
}
수량에따른가격함수 = (제품명) =>{
    let element;
    switch(제품명){
        case 'led':
            element =  document.getElementById('led');
            break;
        case 'cam':
            element = document.getElementById('cam');
            break
        default: return 0;
    }
    return element.value * element.dataset.price;
}
체크된옵션가격 = (제품명) =>{
    return [...allInput].reduce((sum, inputVar)=>{
        if(inputVar.checked && inputVar.className === 제품명)
            return sum + Number(inputVar.value);
        return sum;
    },0);
}


orderAmount = (input, pId) =>{
    const 수량제품가격 = 수량에따른가격함수(input.className);
    if(input.type === 'checkbox' && 수량제품가격 < 1) {
        alert('제품 수량이 0 이므로 부속품을 선택할 수 없습니다.');
        input.checked = false;
        return;
    }

    const 제품부속품가격 = 체크된옵션가격(input.className);


    const pricePTag = document.getElementById(pId);
    const parentParent = pricePTag.parentElement.parentElement;
    const 친구요소 = parentParent.previousElementSibling ? parentParent.previousElementSibling : parentParent.nextElementSibling;
    const friendPrice = 친구요소.querySelector('p').innerText.replace(/,|원/g,'');



    const 수량제품부속품가격 = 수량제품가격 + 제품부속품가격;
    pricePTag.innerText = 수량제품부속품가격.toLocaleString()+'원';
    totalPriceTag.innerText = (수량제품부속품가격+Number(friendPrice)).toLocaleString()+'원';
}


allInput.forEach(input => {
    orderChangeValue(input);
    input.addEventListener('change', ()=>orderChangeValue(input));
})


//팝업창 띄우기

const openPopup = (imgUrl) => {
    const popup = window.open("popup_contents.html", '팝업이름', 'width=400px, height=350px, left=700, top=200');
    popup.document.writeln(`
    <html lang="ko">
    <head>
    <title>제품 이미지 확대 보기</title>
</head>
<body align="center">
    <img src="${imgUrl}" alt="확대 이미지"/><br>
    <button type="button" id="rotateButton">빙 빙</button>
    <button type="button" id="plumpButton">통 통</button>
    <button type="button" onclick="window.close()">팝업창 닫기</button>
</body>
</html>`);//px 단위는 생략 가능하다.
    popup.document.close();
    const rotateButton = popup.document.getElementById('rotateButton');
    const plumpButton = popup.document.getElementById('plumpButton');
    const images = document.querySelectorAll('img');

    // 버튼 클릭 시 이미지 회전
    rotateButton.addEventListener('mousedown', () => {
        images.forEach(image => {
            const originStyle = image.style.cssText;
            image.style.transition = 'transform 0.1s';
            let rotation = 0;
            const interval = setInterval(() => {
                rotation += 15;
                image.style.transform = `rotate(${rotation}deg)`;
            }, 100);
            const stopAnimation = () => {
                clearInterval(interval); // 애니메이션 중지
                image.style.cssText = originStyle; // 원래 스타일로 복원
            };


            rotateButton.addEventListener('mouseup', stopAnimation);
            rotateButton.addEventListener('mouseleave', stopAnimation);
        })
    });

    plumpButton.addEventListener('mousedown', () => {
        let x = 0, y = 0; // 이미지의 초기 위치
        let dx = 2, dy = 2; // 이동 속도
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;

        images.forEach(image => {
            const style = image.style.cssText;
            image.style.position = 'absolute';
            const moveImage = () => {
                x += dx;
                y += dy;

                // 화면 경계에 닿으면 방향 반전
                if (x + image.offsetWidth >= containerWidth || x <= 0) dx *= -1;
                if (y + image.offsetHeight >= containerHeight || y <= 0) dy *= -1;

                image.style.transform = `translate(${x}px, ${y}px)`;
            };

            const interval = setInterval(moveImage, 10); // 10ms마다 위치 업데이트

            const stopAnimation = () => {
                clearInterval(interval); // 애니메이션 중지
                image.style.cssText = style; // 초기 스타일 복원
            };

            plumpButton.addEventListener('mouseup',  stopAnimation);
            plumpButton.addEventListener('mouseleave', stopAnimation);
            //image css 초기화
        })
    });

}
