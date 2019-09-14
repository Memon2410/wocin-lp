export default class Register {
  constructor () {
    this.states = ['Selecciona un estado', 'Área Metropolitana', 'CDMX', 'Jalisco', 'Puebla', 'Querétaro', 'Sonora', 'Yucatán']
    this.myobject = {
      ValueA: 'Text A',
      ValueB: 'Text B',
      ValueC: 'Text C'
    }
  }

  initRegister () {
    console.log('register')
    const that = this
    const select = document.getElementById('input-state')

    for (var i = 0; i < this.states.length; i++) {
      let opt = document.createElement('option')
      opt.value = this.states[i]
      opt.innerHTML = this.states[i]
      if (i === 0) {
        opt.disabled = true
        opt.selected = true
      }
      select.appendChild(opt)
    }
  }
}
