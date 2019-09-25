export default class Menu {
  constructor () {
    this.scrollBtn = document.getElementsByClassName('scroll--top')[0]
    this.urlParams = new URLSearchParams(window.location.search)
  }

  initMenu () {
    document.onscroll = (event) => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop

      scrollTop > 175 ? this.scrollBtn.style.display = 'block' : this.scrollBtn.style.display = 'none'
    }
    
    this.scrollBtn.addEventListener('click', () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    })

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

    if (this.urlParams.has('section')) {
      window.scroll({
        top: document.getElementsByClassName(this.urlParams.get('section'))[0].offsetTop - window.difference,
        behavior: 'smooth' })
    }
  }
}
