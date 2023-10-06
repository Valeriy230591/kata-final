let header = document.querySelector('.header')
let blockAside = document.querySelector('.aside')
let blockCall = document.querySelector('.requere-call')
let blockFeedback = document.querySelector('.feedback')
let blockBlur = document.querySelector('.blur')

const btnOpenAside = document.querySelector('.burger')
const btnCloseAside = document.querySelector('.btn__close')
const btnPhoneAside = document.querySelector('.call')
const btnPhoneHeader = header.querySelector('.call')
const btnChatAside = document.querySelector('.chat')
const btnChatHeader = header.querySelector('.chat')
const btnFeedbackClose = blockFeedback.querySelector('.feedback__close')
const btnCallClose = blockCall.querySelector('.requere-call__btn-close')

btnOpenAside.addEventListener('click', function () {
  blockAside.classList.add('active')
  blockBlur.classList.add('active__blur')
})
btnPhoneAside.addEventListener('click', function () {
  blockAside.classList.remove('active')
  blockCall.classList.add('active__requere')
  blockBlur.classList.add('active__blur')
})
btnPhoneHeader.addEventListener('click', function () {
  blockCall.classList.add('active__requere')
  blockBlur.classList.add('active__blur')
})
btnChatAside.addEventListener('click', function () {
  blockFeedback.classList.add('active__feedback')
  blockAside.classList.remove('active')
  blockBlur.classList.add('active__blur')
})
btnChatHeader.addEventListener('click', function () {
  blockFeedback.classList.add('active__feedback')
  blockBlur.classList.add('active__blur')
})
btnCloseAside.addEventListener('click', function () {
  blockAside.classList.remove('active')
  blockBlur.classList.remove('active__blur')
})
btnFeedbackClose.addEventListener('click', function () {
  blockFeedback.classList.remove('active__feedback')
  blockBlur.classList.remove('active__blur')
})
btnCallClose.addEventListener('click', function () {
  blockCall.classList.remove('active__requere')
  blockBlur.classList.remove('active__blur')
})

blockBlur.addEventListener('click', function () {
  blockCall.classList.remove('active__requere')
  blockFeedback.classList.remove('active__feedback')
  blockAside.classList.remove('active')
  blockBlur.classList.remove('active__blur')
})
