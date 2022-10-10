
const spans = document.querySelectorAll("span")
const contents = document.querySelectorAll(".content")

const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thirdTop = contents[2].offsetTop
const fourthTop = contents[3].offsetTop
const fifthTop = contents[4].offsetTop


spans[0].onclick = function(){
    window.scroll({top:firstTop, left:0, behavior: 'smooth'})
}
spans[1].onclick = function(){
    window.scroll({top:secondTop, left:0, behavior: 'smooth'})
}
spans[2].onclick = function(){
    window.scroll({top:thirdTop, left:0, behavior: 'smooth'})
}
spans[3].onclick = function(){
    window.scroll({top:fourthTop, left:0, behavior: 'smooth'})
}
spans[4].onclick = function(){
    window.scroll({top:fifthTop, left:0, behavior: 'smooth'})
}




/* 무엇이

const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const slide = document.querySelector(".slide")

const maxSlide = slideItem.length;

let curPos =0;//현재 보고있는 이미지의 인덱스 번호
let position = 0;//현재 박스위치
let slideHeight = slide.clientHeight;//세로로 움직이라구우우우우우...

function prev(){
    if(curPos > 0 ){
        nextBtn.removeAttribute("disable")
        position += LIKES_HEIGHT//...의심
        slideBox.style.transform = `translateY(${position}px)`
        curPos -= 1;
    } if (curPos === 0 ) {
        prevBtn.setAttribute("disabled", "true")
    } 
}


function next(){
    if(curPos < slideBox.length){
        prevBtn.removeAttribute("disabled")
        position += LIKES_HEIGHT
        SlideBox.style.transform = `translateY(${position}px)`
        curPos += 1;
    } if (curPos === 2){
        nextBtn.setAttribute("disabled", "true")
    }
}


function init(){
    prevBtn.setAttribute("disabled", "true")
    nextBtn.addEventListener("click", next)
    prevBtn.addEventListener("click", prev)
}

init();

잘못된걸까*/
/*문서의 two를 찾아서 눌렀을때 내부의 코드를 실행*/

document.querySelector(".one").addEventListener("click", function(){
    document.querySelector(".slideBox").style.transform = 'translateY(0vh)';
    });

document.querySelector(".two").addEventListener("click", function(){
    document.querySelector(".slideBox").style.transform = 'translateY(-110vh)';
    });

document.querySelector(".three").addEventListener("click", function(){
    document.querySelector(".slideBox").style.transform = 'translateY(-220vh)';
    });

document.querySelector(".four").addEventListener("click", function(){
    document.querySelector(".slideBox").style.transform = 'translateY(-330vh)';
    });

    /*.......이게 최선입니까 휴먼?네.*/


/*영상자동멈춤
$(".movie").on("mouseout", function(){
    movie.autoplay.stop();
    return flase;
})
나중에 공부하고 바꾼다*/