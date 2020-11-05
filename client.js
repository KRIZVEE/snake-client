const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    // host: '192.168.0.139',
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: KSF");
    // for one command it works but not more than one
    conn.write("Move: down")
    // conn.write("Move: right")

    setTimeout(() => {
      conn.write("Move: down")
    }, 1000);
    setTimeout(() => {
      conn.write("Move: left")
    }, 2000);
    setTimeout(() => {
      conn.write("Move: up")
    }, 3000);
    setTimeout(() => {
      conn.write("Move: up")
    }, 4000);

      // setInterval(() => {
      //   conn.write("Move: up")
      // }, 500)
  })

  //we can register another connect callback with no issues
  // conn.on('connect',()=>{
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 500)
  // })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  return conn;
}
module.exports = { connect };