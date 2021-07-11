

const title =  document.querySelector('.questions_item-title');
const text =  document.querySelector('.questions_item-text');
let btn =  document.querySelector('.menu_btn');
let menu = document.querySelector('.menu_list');





title.onclick = function(){
    text.classList.toggle('active');
    title.classList.toggle('active1')
}






btn.onclick = ()=> {
    menu.classList.toggle('active')
}