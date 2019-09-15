// Dependencies
import TweenLite from 'gsap'

// Components
import DatePicker from './components/datePicker'

// Layout
import Menu from './layout/menu'

// Views
import Register from './views/register'

document.addEventListener('DOMContentLoaded', () => {
  const datePicker = new DatePicker()
  const menu = new Menu()
  const register = new Register()

  datePicker.initDatePicker()
  menu.initMenu()
  register.initRegister()
})
