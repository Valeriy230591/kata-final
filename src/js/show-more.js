const btn = document.querySelector('.show-more__btn');
const block = document.querySelector('.slider-brands__wrapper');
let text = btn.querySelector('span');
let img = btn.querySelector('.show-more--img');

btn.addEventListener('click',function(){
   if(text.textContent === 'Показать все'){
    block.style.height = '100%'
    text.textContent = 'Скрыть'
    img.style.transform = 'rotate(180deg)'
   }else{
    block.style.height = '145px'
    text.textContent = 'Показать все'
    img.style.transform = 'rotate(0deg)'
   }
});