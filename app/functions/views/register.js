import Auxiliar from '../utils/auxiliar'
import TinyDatePicker from 'tiny-date-picker'
import Moment from 'moment'

export default class Register {
  constructor () {
    const that = this
    this.auxiliar = new Auxiliar()
    this.alertText = document.getElementById('alert-form')
    this.states = ['Selecciona un estado', 'Área Metropolitana', 'Baja California', 'Jalisco', 'Nuevo León', 'Puebla', 'Querétaro', 'Sonora', 'Yucatán']
    this.cities = {
      'Área Metropolitana': ['Selecciona una ciudad', 'AMCM (Área Metropolitana y Ciudad de México)'],
      'Baja California': ['Selecciona una ciudad', 'Tijuana'],
      'Jalisco': ['Selecciona una ciudad', 'Guadalajara'],
      'Nuevo León': ['Selecciona una ciudad', 'Monterrey'],
      'Puebla': ['Selecciona una ciudad', 'Puebla'],
      'Querétaro': ['Selecciona una ciudad', 'Querétaro'],
      'Sonora': ['Selecciona una ciudad', 'Hermosillo' ],
      'Yucatán': ['Selecciona una ciudad', 'Mérida' ]
    }
  }

  addAlert(msg) {
    this.alertText.innerText = msg
  }

  initRegister () {
    const that = this
    const submitBtn = document.getElementById('submit-btn')
    const select = document.getElementById('input-state')
    const selectCity = document.getElementById('input-city')
    let selectBoolean = false
    let selectCityBoolean = false
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
      if (selectBoolean  && selectCityBoolean && dateBoolean && nameBoolean && emailBoolean && phoneBoolean) {
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
      that.auxiliar.clearSelect(selectCity)
      setTimeout(() => {
        that.auxiliar.addOptions(that.cities[event.target.value], selectCity)
        select.style.color = '#000'
        document.getElementById('container--input__city').style.display = 'block'
        selectBoolean = true
        checkSubmit()
      }, 250)
    }

    selectCity.onchange = (event) => {
      selectCity.style.color = '#000'
      selectCityBoolean = true
      checkSubmit()
    }

    // Date picker
    const checkAdult = (birthday) => {
      const today = Moment()
      age = today.diff(birthDay, 'years')
      isAdult = age >= 18
    }

    let dp = TinyDatePicker('#input-date', {
      lang: {
        days: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Noviembre',
          'Diciembre',
        ],
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar',
      }
    })

    dp.on({
      open: () => {
        console.log('Opened!')
      },

      close: () => {
        if (isAdult) {
          dateBoolean = true
          this.addAlert('')
        } else {
          dateBoolean = false
          this.addAlert('Debes se mayor de edad')
        }
        if (parseInt(day) < 10) {
          day = '0' + day
        }
        if (parseInt(month) < 10) {
          month = '0' + month
        }
        document.getElementById('input-date').value = day + '/' + month + '/' + year
        checkSubmit()
      },

      select: (_, dp) => {
        year = dp.state.selectedDate.getUTCFullYear()
        month = dp.state.selectedDate.getUTCMonth() + 1
        day = dp.state.selectedDate.getUTCDate()
        birthDay = Moment(year + '-' + month + '-' + day)
        checkAdult(birthDay)
      },

      statechange: (_, dp) => {
        console.log(dp.state)
      }
    })

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

    document.getElementById('input-mail').onblur = (event) => {
      if (event.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/)) {
        emailBoolean = true
        this.addAlert('')
      } else {
        emailBoolean = false
        this.addAlert('Ingresa una dirección de correo electrónico válida')
      }
    }

    document.getElementById('input-phone').onkeyup  = (event) => {
      if (event.target.value.length > 1) {
        if (event.target.value.match("^([0-9][0-9]*)$")) {
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
  }
}
