//console.log('class jan. 23');

function saysHi (user) {
  return `Hi ${user}!`;
}
function saysBye(user) {
  return `Bye ${user}!`;
}
// A FUNCTION THAT TAKES IN a function as an argument
function createGreeting(user, cb) {
  return cb(user);
}
// Console logging the return statements of each callback
console.log(createGreeting('Lauren', saysHi));
console.log(createGreeting('Lauren', saysBye));
