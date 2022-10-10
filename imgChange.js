function imgChange(){
    let myImg =document.getElementById("kart")//imgChage라는 변수를 선언하여 문서에서 카트라는 아이디를 가진 요소를 찾아 myImg라는 변수의 값으로 할당.
    if (kart.src.match("kart")){//myImg라는 변수의 속성 중 src라는 속성값이 kart와 매치되면 
        myImg.src="imgs/run.gif"//gif파일로 바뀌게함.
    } else {
        myImg.src="imgs/kartrider.jpg"//그렇지 않으면 다시 원래의 이미지 파일이 나타난다.
    }
}

function imgChange2 (){
    let myImg =document.getElementById("travel")
    if (travel.src.match("landing")){
    myImg.src="imgs/uk.png"
    } else if (travel.src.match("uk")){
        myImg.src="imgs/swiss.png"
    } else if(travel.src.match("swiss")) {
        myImg.src="imgs/animal.JPG"
    } else if(travel.src.match("animal.JPG")) {
        myImg.src="imgs/landing.JPG"
    }
}

function imgChange3(){
    let myImg = document.getElementById("etc")
    if (etc.src.match("bicycle")){
        myImg.src="imgs/make.jpg"
    } else if (etc.src.match("make")){
        myImg.src="imgs/walwal.jpg"
    } else if(etc.src.match("walwal")){
        myImg.src="imgs/dobak.jpg"
    } else if (etc.src.match("dobak")){
        myImg.src="imgs/bicycle.jpg"
    }
}



/*
function alertClick(){
    alert("유효하지 않은 버튼입니다.")
}*/