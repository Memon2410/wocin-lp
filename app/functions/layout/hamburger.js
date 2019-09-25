export default class Hamburger {
  constructor () {
    this.visibleNav = false
  }

  initHamburger () {
    const menuBtn = document.getElementsByClassName('hamburger--header')[0]
    const menu = document.getElementsByTagName('nav')[0]
    const strokes = document.getElementsByClassName('stroke--menu')

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
      window.difference = window.innerWidth < 768 ? 105 : 175
    }

    menuBtn.addEventListener('click', toggleMenu)
  }
}
