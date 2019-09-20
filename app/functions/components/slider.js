import Glide from '@glidejs/glide'

export default class Slider {
  constructor () {
    
  }

  initSlider () {
    const sliderHero = new Glide('#slider__hero', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 5000,
      keyboard: true

    })
    sliderHero.mount()

    sliderHero.on('move', (event) => {
      if (sliderHero.index === 3) {
        document.getElementsByClassName('hero')[0].style.background = 'linear-gradient(180deg, rgba(1,142,185,1) 0%, rgba(5,140,186,1) 30%, rgba(0,104,145,1) 55%)'
      } else {
        document.getElementsByClassName('hero')[0].style.background = '#F0F812'
      }
    })
  }
}
