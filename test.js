/*화면사이즈 변경시 offsetTop 안되서 방법찾는중 */


const spans = document.querySelectorAll("span")


spans[0].onclick = function(){
    window.scroll({top:0, left:0, behavior: 'smooth'})
}
spans[1].onclick = function(){
    window.scroll({top:884, left:0, behavior: 'smooth'})
}
spans[2].onclick = function(){
    window.scroll({top:1700, left:0, behavior: 'smooth'})
}
spans[3].onclick = function(){
    window.scroll({top:2518, left:0, behavior: 'smooth'})
}
spans[4].onclick = function(){
    window.scroll({top:3489, left:0, behavior: 'smooth'})
}




