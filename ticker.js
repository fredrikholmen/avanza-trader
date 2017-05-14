const Promise = require('bluebird')
const Avanza = require('avanza')
const config = require('./config')
const avanza = new Avanza.default() // This does the trick


avanza.socket.on('connect', () => {

  /**
   * 5479 is the instrumentId for Telia.
   */
  avanza.socket.subscribe('5479', ['quotes', 'brokertradesummary']);
});

avanza.socket.on('quote', data => {

  /**
   * Do something with the real-time quote data
   */
  console.info(Date.now(), 'Received quote: ', data);
});

avanza.authenticate({
    username: config.username,
    password: config.password
}).then(() => {

   /**
   * Initialize the socket after authentication
   */
  avanza.socket.initialize();

})
.catch((err) => {
	console.error(err)
})