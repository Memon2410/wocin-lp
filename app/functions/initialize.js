// Dependencies
import TweenLite from 'gsap'

// Layout
import Hamburger from './layout/hamburger'
import Menu from './layout/menu'

// Components
import Slider from './components/slider'

// Views
import Register from './views/register'

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = new Hamburger()
  const menu = new Menu()
  const register = new Register()
  const slider = new Slider()

  window.difference = window.innerWidth < 768 ? 85 : 145

  hamburger.initHamburger()

  if (document.getElementsByClassName('hero').length > 0) {
    menu.initMenu()
    register.initRegister()
    slider.initSlider()
  }
})
