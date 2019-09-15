export default class Auxiliar {
  clearSelect (select) {
    select.options.length = 0
  }

  addOptions (options, select) {
    for (var i = 0; i < options.length; i++) {
      let opt = document.createElement('option')
      opt.value = options[i]
      opt.innerHTML = options[i]
      if (i === 0) {
        opt.disabled = true
        opt.selected = true
      }
      select.appendChild(opt)
    }
  }
}
