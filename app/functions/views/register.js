import Auxiliar from '../utils/auxiliar'
import datepicker from 'js-datepicker'
import Moment from 'moment'

export default class Register {
  constructor () {
    const that = this
    this.auxiliar = new Auxiliar()
    this.alertText = document.getElementById('alert-form')
    this.states = ['Selecciona un estado', 'Área Metropolitana', 'Baja California', 'Jalisco', 'Nuevo León', 'Puebla', 'Querétaro', 'Sonora', 'Yucatán']
  }

  addAlert (msg) {
    this.alertText.innerText = msg
  }

  initRegister () {
    const that = this
    const submitBtn = document.getElementById('submit-btn')
    const select = document.getElementById('input-state')
    const selectCity = document.getElementById('input-city')
    let selectBoolean = false
    let cityBoolean = false
    let selectDate = false
    let birthDay
    let age = null
    let year = null
    let month = null
    let day = null
    let isAdult = false
    let dateBoolean = false
    let nameBoolean = false
    let emailBoolean = false
    let phoneBoolean = false

    submitBtn.disabled = true

    const checkSubmit = () => {
      if (selectBoolean && cityBoolean && dateBoolean && nameBoolean && emailBoolean && phoneBoolean) {
        submitBtn.disabled = false
        submitBtn.style.opacity = '1'
      } else {
        submitBtn.disabled = true
        submitBtn.style.opacity = '0.5'
      }
    }

    // Selects
    this.auxiliar.addOptions(this.states, select)

    select.onchange = (event) => {
      setTimeout(() => {
        select.style.color = '#000'
        document.getElementById('container--input__city').style.display = 'block'
        selectBoolean = true
        checkSubmit()
      }, 250)
    }

    // Date picker
    const today = new Date()
    today.setFullYear(today.getFullYear() - 18)

    const picker = datepicker('#input-date', {
      onSelect: (instance, date) => {
        dateBoolean = true
        this.addAlert('')
        checkSubmit()
      },
      onShow: instance => {
      },
      onHide: instance => {
      },

      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString('es-MX')
        input.value = value
      },

      startDay: 1,
      customDays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      customMonths: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      overlayButton: 'Aceptar',
      overlayPlaceholder: 'Ingresa un año'

    })

    picker.setDate(today)
    picker.setMax(today)
    picker.setMin(new Date(1900, 0, 1))
    document.getElementById('input-date').value = ''

    // Validation Name
    document.getElementById('input-name').onkeyup = (event) => {
      if (event.target.value.match(/^[a-z ñáéíóú A-Z ÑÁÉÍÓÚ]+$/)) {
        nameBoolean = true
        this.addAlert('')
      } else {
        nameBoolean = false
        this.addAlert('El campo Nombre sólo debe contener letras')
      }
      checkSubmit()
    }

    document.getElementById('input-city').onkeyup = (event) => {
      console.log('cndscdnsoicndsoi')
      if (event.target.value.match(/^[a-z ñáéíóú A-Z ÑÁÉÍÓÚ]+$/)) {
        cityBoolean = true
        this.addAlert('')
      } else {
        cityBoolean = false
        this.addAlert('El campo Ciudad sólo debe contener letras')
      }
      checkSubmit()
    }

    // Validation email
    document.getElementById('input-mail').onblur = (event) => {
      if (event.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/)) {
        emailBoolean = true
        this.addAlert('')
      } else {
        emailBoolean = false
        this.addAlert('Ingresa una dirección de correo electrónico válida')
      }
    }
    // Validation phone
    document.getElementById('input-phone').onkeyup = (event) => {
      if (event.target.value.length > 1) {
        if (event.target.value.match('^([0-9][0-9]*)$')) {
          this.addAlert('')
        } else {
          phoneBoolean = false
          this.addAlert('El campo Teléfono solo debe contener números')
        }
      }
      checkSubmit()
    }

    document.getElementById('input-phone').onblur = (event) => {
      if (event.target.value.length === 10) {
        phoneBoolean = true
        this.addAlert('')
      } else {
        phoneBoolean = false
        this.addAlert('Ingresa tu número telefónico a 10 dígitos')
      }
    }

    // Submit button
    document.getElementById('submit-btn').onclick = (event) => {
      event.preventDefault()
      window.location.href = '/gracias.html'
    }
  }
}
