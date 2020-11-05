// Stores the active TCP connection object.
let connection;

const handleUserInput = function (stdin,c) {

  // console.log('c : ',c);

  stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      c.write("Move: up")
      // console.log('up');
    }
    if (key === 'a') {
      c.write("Move: left")

      // console.log('left');
    }
    if (key === 's') {
      c.write("Move: down")

      // console.log('down');
    }
    if (key === 'd') {
      c.write("Move: right")

      // console.log('right');
    }
    if (key === 'h') {
      c.write("Say: h!$$")

      // console.log('right');
    }
    if (key === 'p') {
      c.write("Say: $$$")
    }

    process.stdout.write('.');
  });
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  let connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin, connection)
  return stdin;
}


module.exports = { setupInput }