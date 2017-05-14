const Promise = require('bluebird')
const Avanza = require('avanza')
const config = require('./config')
const avanza = new Avanza.default() // This does the trick

avanza.authenticate({
    username: config.username,
    password: config.password
}).then(() => {

   avanza.getPositions().then((positions) => Promise.map(positions, (position) => {
   return avanza.getStock(position.instrumentId)
   	.then((data) => {
   		position.company = data
   		console.log(position)
   	})
   }))
})
.catch((err) => {
	console.error(err)
})