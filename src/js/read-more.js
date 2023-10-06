let btn = document.querySelector('.read__more');
let articleText = document.querySelector('.article__text');
let text = btn.querySelector('span');
let img = btn.querySelector('.read__more--icon');

btn.addEventListener('click',function(){
    if(text.textContent === 'Читать далее'){
        articleText.style.height = '100%'
        text.textContent = 'Скрыть'
        img.style.transform = 'rotate(180deg)'
    }else{
        articleText.style.height = '19vw'
        img.style.transform = 'rotate(0deg)'
         text.textContent = 'Читать далее'
    }
});