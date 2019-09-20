// Dependencies
import TweenLite from 'gsap'

// Layout
import Menu from './layout/menu'

// Components
import Slider from './components/slider'

// Views
import Register from './views/register'

document.addEventListener('DOMContentLoaded', () => {
  const menu = new Menu()
  const register = new Register()
  const slider = new Slider()

  menu.initMenu()
  register.initRegister()
  slider.initSlider()
})
