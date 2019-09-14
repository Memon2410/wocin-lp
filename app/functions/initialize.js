// Dependencies
import TweenMax from 'gsap'

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
