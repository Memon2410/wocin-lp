import TinyDatePicker from 'tiny-date-picker'

export default class DatePicker {
  constructor () {

  }

  initDatePicker () {
    // TinyDatePicker('#input-date')
    let dp = TinyDatePicker('#input-date').on({
      open: () => console.log('Opened!'),
      close: () => console.log('Closed!'),
      select: (_, dp) => console.log('A date was picked: ', dp.state.selectedDate),
      statechange: (_, dp) => console.log('The view, hilightedDate, and/or selectedDate changed: ', dp.state)
      // gotoDate: ('10/24/1977') => console.log('Ooooh')
    })

      // dp.setState({hilightedDate: new Date(2018, 11, 24, 10, 33, 30, 0)})
      dp.setState({
          lang: {
                  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              months: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',

              ],
          }
      })
  }
}
