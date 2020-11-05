
const { connect } = require('./client')
const {setupInput} = require('./input')
console.log('Connecting ...');
let retureConnect = connect();
setupInput(retureConnect);


