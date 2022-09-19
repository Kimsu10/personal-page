
const spans = document.querySelectorAll("span")
const contents = document.querySelectorAll(".content")

const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thirdTop = contents[2].offsetTop
const fourthTop = contents[3].offsetTop
const fifthTop = contents[4].offsetTop
const sixthTop = contents[5].offsetTop

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
spans[5].onclick = function(){
    window.scroll({top:sixthTop, left:0, behavior: 'smooth'})
}





