import Auxiliar from '../utils/auxiliar'
import Moment from 'moment'

export default class Register {
  constructor () {
    const that = this
    this.auxiliar = new Auxiliar()
    this.alertText = document.getElementById('alert-form')
    this.states = ['Selecciona un estado', 'Baja California', 'Ciudad de México', 'Jalisco', 'Nuevo León', 'Puebla', 'Querétaro', 'Sonora', 'Yucatán']
    this.cities = {
      'Baja California': ['Selecciona una ciudad', 'Tijuana'],
      'Ciudad de México': ['Selecciona una ciudad', 'Norte', 'Sur'],
      'Jalisco': ['Selecciona una ciudad', 'Guadalajara', 'Tlaquepaque', 'Tonalá', 'Zapopan'],
      'Nuevo León': ['Selecciona una ciudad', 'Escobedo', 'Guadalupe', 'Monterrey', 'Santa Catarina', 'San Pedro', 'San Pedro Garza'],
      'Puebla': ['Selecciona una ciudad', 'Atlixco', 'Calpan', 'Coronango', 'Cuautlancingo', 'Chiautla', 'Chipilo', 'Izúcar de Matamoros', 'Puebla', 'Rafael Lara Grajales', 'San José Chilapa', 'San Martín Texmelucan', 'San Miguel Xoxtla', 'San Pedro Cholula', 'Tecali de Herrera', 'Tehuacán', 'Tepeaca'],
      'Querétaro': ['Selecciona una ciudad', 'Celaya', 'Corregidora', 'Pedro Escobedo', 'San Juan del Río', 'San Miguel de Allende', 'Tequisquiapan'],
      'Sonora': ['Selecciona una ciudad', 'Hermosillo' ],
      'Yucatán': ['Selecciona una ciudad', 'Mérida' ]
    }
  }

  addAlert (msg) {
    this.alertText.innerText = msg
  }

  initRegister () {
    const that = this
    const submitBtn = document.getElementById('submit-btn')
    const select = document.getElementById('input-state')
    const selectCity = document.getElementById('input-city')
    const inputs = document.querySelectorAll('input[type=number]')
    const tyc = document.getElementById('terms')

    let selectBoolean = false
    let selectCityBoolean = false
    let nameBoolean = false
    let emailBoolean = false
    let phoneBoolean = false
    let dateBoolean = false
    let tycBoolean = false

    let birthDay
    let age = null
    let year = null
    let month = null
    let day = null
    let isAdult = false
    let dateInput = {
      dayInput: false,
      monthInput: false,
      yearInput: false
    }
    let notAdult = 'Lo sentimos, debes ser mayor de edad'
    let invalidDate = 'Debes ingresar una fecha  válida'

    submitBtn.disabled = true

    const checkSubmit = () => {
      if (selectBoolean && selectCityBoolean && dateBoolean && nameBoolean && emailBoolean && phoneBoolean && tycBoolean) {
        submitBtn.disabled = false
        submitBtn.style.opacity = '1'
      } else {
        submitBtn.disabled = true
        submitBtn.style.opacity = '0.5'
      }
    }

    // T y C [Checkbox]
    tyc.onchange = (event) => {
      tycBoolean = !tycBoolean
      checkSubmit()
    }

    // Selects
    this.auxiliar.addOptions(this.states, select)

    select.onchange = (event) => {
      that.auxiliar.clearSelect(selectCity)
      setTimeout(() => {
        select.style.color = '#000'
        that.auxiliar.addOptions(that.cities[event.target.value], selectCity)
        document.getElementById('container--input__city').style.opacity = '1'
        selectBoolean = true
        checkSubmit()
      }, 250)
    }

    selectCity.onchange = (event) => {
      selectCity.style.color = '#000'
      selectCityBoolean = true
      checkSubmit()
    }

    // Date
    const checkAdult = (birthday) => {
      const today = Moment()
      age = today.diff(birthDay, 'years')
      isAdult = age >= 18
    }

    const changeFocus = (elem) => {
      document.getElementById(elem).focus()
    }

    const checkLength = (event) => {
      let lengthString = event.target.id === 'year' ? 4 : 2
      if (event.target.value.length === lengthString) {
        event.target.id === 'day'
          ? changeFocus('month')
          : event.target.id === 'month'
            ? changeFocus('year')
            : document.getElementById('year').blur()
      }
    }

    const checkNumbers = (event) => {
      let maxNumber
      let index
      switch (event.target) {
        case inputs[0]:
          maxNumber = 31
          index = 'dayInput'
          break
        case inputs[1]:
          maxNumber = 12
          index = 'monthInput'
          break
        case inputs[2]:
          const dateYear = new Date()
          year = event.target.value
          maxNumber = dateYear.getFullYear()
          index = 'yearInput'
          break
      }

      if (event.target.id !== 'year') {
        if (event.target.value < 10 && event.target.value > 0) {
          event.target.value = '0' + parseInt(event.target.value)
        } else if (parseInt(event.target.value) === 0) {
          event.target.value = '00'
        }
      } else {
        if (event.target.value < 1900) {
          for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.border = '1px solid #E0655F'
          }
          this.addAlert(invalidDate)
          event.target.value = ''
          dateBoolean = false
        }
      }

      if (parseInt(event.target.value) > maxNumber) {
        event.target.style.border = '1px solid #E0655F'
        this.addAlert(invalidDate)
        event.target.value = ''
        dateBoolean = false
      } else if (event.target.value !== '') {
        event.target.style.border = '0 solid transparent'
        dateInput[index] = true
      }

      if (dateInput.dayInput && dateInput.monthInput && dateInput.yearInput) {
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].style.border = '0 solid transparent'
        }
        this.addAlert('')
        birthDay = Moment(inputs[2].value + '-' + inputs[1].value + '-' + inputs[0].value)
        if (isNaN(birthDay)) {
          for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.border = '1px solid #E0655F'
          }
          this.addAlert(invalidDate)
          dateBoolean = false
        } else {
          checkAdult(birthDay)
          if (isAdult) {
            for (let i = 0; i < inputs.length; i++) {
              inputs[i].style.border = '0 solid transparent'
            }
            this.addAlert('')
            dateBoolean = true
          } else {
            for (let i = 0; i < inputs.length; i++) {
              inputs[i].style.border = '1px solid #E0655F'
            }
            this.addAlert(notAdult)
            dateBoolean = false
          }
        }
      }
    }

    // Validation Name
    document.getElementById('input-name').onkeyup = (event) => {
      if (event.target.value.match(/^[a-z ñáéíóú A-Z ÑÁÉÍÓÚ]+$/)) {
        document.getElementById('input-name').style.border = '0 solid transparent'
        nameBoolean = true
        this.addAlert('')
      } else {
        document.getElementById('input-name').style.border = '1px solid #E0655F'
        nameBoolean = false
        this.addAlert('El campo Nombre sólo debe contener letras')
      }
      checkSubmit()
    }

    // Validation email
    document.getElementById('input-mail').onblur = (event) => {
      if (event.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/)) {
        document.getElementById('input-mail').style.border = '0 solid transparent'
        emailBoolean = true
        this.addAlert('')
      } else {
        document.getElementById('input-mail').style.border = '1px solid #E0655F'
        emailBoolean = false
        this.addAlert('Ingresa una dirección de correo electrónico válida')
      }
    }
    // Validation phone
    document.getElementById('input-phone').onkeyup = (event) => {
      if (event.target.value.length > 1) {
        if (event.target.value.match('^([0-9][0-9]*)$')) {
          document.getElementById('input-phone').style.border = '0 solid transparent'
          this.addAlert('')
        } else {
          document.getElementById('input-phone').style.border = '1px solid #E0655F'
          phoneBoolean = false
          this.addAlert('El campo Teléfono solo debe contener números')
        }
      }
      checkSubmit()
    }

    document.getElementById('input-phone').onblur = (event) => {
      if (event.target.value.length === 10) {
        document.getElementById('input-phone').style.border = '0 solid transparent'
        phoneBoolean = true
        this.addAlert('')
      } else {
        document.getElementById('input-phone').style.border = '1px solid #E0655F'
        phoneBoolean = false
        this.addAlert('Ingresa tu número telefónico a 10 dígitos')
      }
    }

    // Submit button
    document.getElementById('submit-btn').onclick = (event) => {
      event.preventDefault()
      window.location.href = './gracias.html'
    }

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', checkLength)
      inputs[i].addEventListener('focusout', checkNumbers)
    }
  }
}
