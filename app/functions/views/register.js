import Auxiliar from '../utils/auxiliar'

export default class Register {
  constructor () {
    const that = this
    this.auxiliar = new Auxiliar()
    this.states = ['Selecciona un estado', 'Área Metropolitana', 'CDMX', 'Jalisco', 'Puebla', 'Querétaro', 'Sonora', 'Yucatán']
    this.cities = {
      'Área Metropolitana': ['Selecciona una ciudad', 'Metropolitana 1', 'Área Metropolitana 2', 'Área Metropolitana 3'],
      'CDMX': ['Selecciona una ciudad', 'CDMX 1', 'CDMX 2', 'CDMX 3', 'CDMX 4', 'CDMX 5'],
      'Jalisco': [ 'Selecciona una ciudad', 'Jalisco 1', 'Jalisco 2'],
      'Puebla': ['Selecciona una ciudad', 'Puebla 1', 'Puebla 2'],
      'Querétaro': ['Selecciona una ciudad', 'Querétaro 1', 'Querétaro 2'],
      'Sonora': ['Selecciona una ciudad', 'Sonora 1' ],
      'Yucatán': ['Selecciona una ciudad', 'Yucatán' ]
    }
  }

  initRegister () {
    console.log('register')
    const that = this
    const select = document.getElementById('input-state')
    const selectCity = document.getElementById('input-city')

    this.auxiliar.addOptions(this.states, select)

    select.onchange = function (event) {
      that.auxiliar.clearSelect(selectCity)
      setTimeout(() => {
        that.auxiliar.addOptions(that.cities[event.target.value], selectCity)
      }, 500)
    }
  }
}
