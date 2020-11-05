
const { connect } = require('./client')
console.log('Connecting ...');
connect();
const handleUserInput = function (stdin) {
  stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
    process.stdout.write('.');
  });
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin)  
  return stdin;
}

setupInput();


