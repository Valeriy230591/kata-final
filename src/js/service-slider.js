window.addEventListener('DOMContentLoaded', () => {
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper
  
      breakpoint = window.matchMedia(breakpoint)
  
      const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings)
      }
  
      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings)
        } else {
          if (swiper !== undefined) swiper.destroy(true, true)
          return
        }
      }
  
      breakpoint.addEventListener('change', checker)
      checker()
    }
  
    resizableSwiper('(max-width: 480px)', '.service__slider', {
      
        loop:true,
        pagination:{
            el:'.swiper-pagination ',
            clickable:true,
        },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        350: {
          slidesPerView: 1.3
        },
        480: {
          slidesPerView: 1.5
        }
      }
    })
  })