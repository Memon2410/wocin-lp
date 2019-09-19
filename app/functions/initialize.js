// Dependencies
import TweenLite from 'gsap'

// Layout
import Menu from './layout/menu'

// Views
import Register from './views/register'

document.addEventListener('DOMContentLoaded', () => {
  const menu = new Menu()
  const register = new Register()

  menu.initMenu()
  register.initRegister()
})
