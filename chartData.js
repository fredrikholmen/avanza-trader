const Promise = require('bluebird')
const Avanza = require('avanza')
const config = require('./config')
const avanza = new Avanza.default() // This does the trick

avanza.authenticate({
    username: config.username,
    password: config.password
}).then(() => {

  avanza.getChartdata('5240', 'one_month')
 .then((data) => {
  data.dataSeries.forEach((point) => {
    console.log(point)
  })
})
})
.catch((err) => {
	console.error(err)
})