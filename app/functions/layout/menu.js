export default class Menu {
  constructor () {
    this.visibleNav = false
    this.scrollBtn = document.getElementsByClassName('scroll--top')[0]
  }

  initMenu () {
    const menuBtn = document.getElementsByClassName('hamburger--header')[0]
    const menu = document.getElementsByTagName('nav')[0]
    const strokes = document.getElementsByClassName('stroke--menu')
    let difference = window.innerWidth < 768 ? 105 : 175

    TweenLite.to(menu, 0, {
      x: -120,
      alpha: 0
    })

    const openMenu = () => {
      let posY = window.innerWidth < 768 ? [7, -8] : [9, -10]

      menu.style.display = 'block'
      TweenLite.to(menu, 1, {
        x: 0,
        alpha: 1,
        ease: Power2.easeOut
      })

      TweenLite.to(strokes[1], 1, {
        alpha: 0,
        ease: Power2.easeOut
      })

      TweenLite.to(strokes[0], 1, {
        y: posY[0],
        rotation: 45,
        ease: Power2.easeOut
      })
      TweenLite.to(strokes[2], 1, {
        y: posY[1],
        rotation: -45,
        ease: Power2.easeOut
      })
    }

    const closeMenu = () => {
      TweenLite.to(menu, 1, {
        x: -120,
        alpha: 0,
        ease: Power2.easeOut
      })
      TweenLite.to(strokes[1], 1, {
        alpha: 1,
        ease: Power2.easeOut
      })
      TweenLite.to(strokes[0], 1, {
        y: 0,
        rotation: 0,
        ease: Power2.easeOut
      })
      TweenLite.to(strokes[2], 1, {
        y: 0,
        rotation: 0,
        ease: Power2.easeOut
      })
    }

    const toggleMenu = () => {
      !this.visibleNav ? openMenu() : closeMenu()
      this.visibleNav = !this.visibleNav
    }

    document.onscroll = () => {
      if (this.visibleNav) {
        closeMenu()
        this.visibleNav = !this.visibleNav
      }
    }

    window.onresize = () => {
      if (this.visibleNav) {
        closeMenu()
        this.visibleNav = !this.visibleNav
      }
      difference = window.innerWidth < 768 ? 105 : 175
    }

    window.onscroll = (event) => {
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
        top: document.getElementsByClassName('benefits')[0].offsetTop - difference,
        behavior: 'smooth' })
    })

    document.getElementsByClassName('style--btn')[0].addEventListener('click', () => {
      window.scroll({
        top: document.getElementsByClassName('style')[0].offsetTop - difference,
        behavior: 'smooth' })
    })

    document.getElementsByClassName('form--btn')[0].addEventListener('click', () => {
      window.scroll({
        top: document.getElementsByClassName('form')[0].offsetTop - difference,
        behavior: 'smooth' })
    })

    menuBtn.addEventListener('click', toggleMenu)
  }
}
