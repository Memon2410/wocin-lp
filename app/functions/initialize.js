// Dependencies
import TweenMax from 'gsap'

// Utils
// import Auxiliar from './utils/auxiliar'

// Components
import DatePicker from './components/datePicker'

// Views
import Register from './views/register'

document.addEventListener('DOMContentLoaded', () => {
  const datePicker = new DatePicker()
  const register = new Register()

  datePicker.initDatePicker()
  register.initRegister()
})
