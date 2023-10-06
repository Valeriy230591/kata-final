const btn = document.querySelector('.button__show-more');
const block = document.querySelector('.service__slider');
let text = btn.querySelector('span');
let img = btn.querySelector('.button__show-more--image');

btn.addEventListener('click',function(){
   if(text.textContent === 'Показать все'){
    block.style.height = '100%'
    text.textContent = 'Скрыть'
    img.style.transform = 'rotate(180deg)'
   }else{
    block.style.height = '180px'
    text.textContent = 'Показать все'
    img.style.transform = 'rotate(0deg)'
   }
});