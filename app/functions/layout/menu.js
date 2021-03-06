export default class Menu {
  constructor () {
    this.scrollBtn = document.getElementsByClassName('scroll--top')[0]
  }

  initMenu () {
    let urlParam = function (name) {
      let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href)
      if (results == null) {
        return null
      } else {
        return decodeURI(results[1]) || 0
      }
    }

    const resizeHeader = () => {
      let scrollPos = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY
      let originalSize = window.innerWidth > 768 ? 145 : 85
      let sizeLogo = window.innerWidth > 768 ? 178 : 120
      let topLogo = window.innerWidth > 768 ? 30 : 0

      if (scrollPos > 50) {
        document.getElementsByTagName('header')[0].style.height = '60px'
        document.getElementsByClassName('item--header')[0].style.height = '60px'
        document.getElementsByClassName('item--header')[0].style.margin = '0'
        document.getElementsByClassName('item--header')[0].style.verticalAlign = 'top'
        document.getElementsByClassName('item--header')[1].style.height = '60px'
        document.getElementsByClassName('container__social--header')[0].style.marginTop = '10px'
        document.getElementsByClassName('logo--header')[0].style.width = '8rem'
        document.getElementsByClassName('logo--header')[0].style.marginTop = '6px'
      } else {
        document.getElementsByTagName('header')[0].style.height = originalSize + 'px'
        document.getElementsByClassName('item--header')[0].style.height = originalSize + 'px'
        document.getElementsByClassName('item--header')[0].style.margin = '1rem 0'
        document.getElementsByClassName('item--header')[0].style.verticalAlign = 'middle'
        document.getElementsByClassName('item--header')[1].style.height = originalSize + 'px'
        document.getElementsByClassName('container__social--header')[0].style.marginTop = '30px'
        document.getElementsByClassName('logo--header')[0].style.width = sizeLogo + 'px'
        document.getElementsByClassName('logo--header')[0].style.marginTop = topLogo + 'px'
      }
    }

    const checkUserIE = () => {
      const ua = window.navigator.userAgent
      let msie = ua.indexOf('MSIE ')

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        document.getElementsByClassName('benefits--btn')[0].addEventListener('click', () => {
          window.scrollTo(0, document.getElementsByClassName('benefits')[0].offsetTop - window.difference)
        })

        document.getElementsByClassName('style--btn')[0].addEventListener('click', () => {
          window.scrollTo(0, document.getElementsByClassName('style')[0].offsetTop - window.difference)
        })

        document.getElementsByClassName('form--btn')[0].addEventListener('click', () => {
          window.scrollTo(0, document.getElementsByClassName('form')[0].offsetTop - window.difference)
        })

        if (urlParam('section') !== null) {
          window.scrollTo(0, document.getElementsByClassName(urlParam('section'))[0].offsetTop - window.difference)
        }
      } else {
        document.getElementsByClassName('benefits--btn')[0].addEventListener('click', () => {
          window.scroll({
            top: document.getElementsByClassName('benefits')[0].offsetTop - window.difference,
            behavior: 'smooth' })
        })

        document.getElementsByClassName('style--btn')[0].addEventListener('click', () => {
          window.scroll({
            top: document.getElementsByClassName('style')[0].offsetTop - window.difference,
            behavior: 'smooth' })
        })

        document.getElementsByClassName('form--btn')[0].addEventListener('click', () => {
          window.scroll({
            top: document.getElementsByClassName('form')[0].offsetTop - window.difference,
            behavior: 'smooth' })
        })

        if (urlParam('section') !== null) {
          window.scroll({
            top: document.getElementsByClassName(urlParam('section'))[0].offsetTop - window.difference,
            behavior: 'smooth' })
        }
      }
      return false
    }

    checkUserIE()

    this.scrollBtn.addEventListener('click', () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    })
    document.onscroll = (event) => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      scrollTop > 175 ? this.scrollBtn.style.display = 'block' : this.scrollBtn.style.display = 'none'
      resizeHeader()
    }
    window.onresize = (event) => {
      resizeHeader()
    }
  }
}
