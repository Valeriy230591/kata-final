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

  resizableSwiper('(max-width: 768px)', '.price__slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination ',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      350: {
        slidesPerView: 1.2
      },
      425: {
        slidesPerView: 1.4
      },
      480: {
        slidesPerView: 1.7
      },
      520: {
        slidesPerView: 1.9
      },
      580: {
        slidesPerView: 2
      },
      630: {
        slidesPerView: 2.3
      },
      676: {
        slidesPerView: 2.5
      }
    }
  })
})
