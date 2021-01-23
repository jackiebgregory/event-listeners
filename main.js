//console.log()

//const firstObj = {};

//const user = {
//  username: 'biz.markie',
//  password: 'abc123'
//  lovesJavascript: true,
//  favoriteNumber: 42,
//}

// DOT NOTATION
//Get values out of an object
//console.log(user.lovesJavascript);
//console.log(user.username);

//BRACKET NOTATION
//const password = 'password';
//console.log(user[password]);
//console.log(['username']);

// ASSIGNING NAMES

const newUser = {
  isNew: true,
}
//newUser.username = 'fresh.prince'; //dot notation
//newUser['password'] = 'abcd1234' //bracket notation
// 
//console.log(newUser);

// METHODS (FUNCTIONS AS VALUES)
const newObject = {
  username: 'Jackie',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

//newObject.username = 'Aja';
//newObject.sayHello();

// ITERATE OVER AN OBJECT
const userTwo = {
username: 'trinity.christiana',
password: 'xyz0987',
lovesJavascript: true,
favoriteNumber: 12,
}
// FOR IN LOOP
for (let key in userTwo) {
  console.log(key); // keys
  console.log(userTwo[key]); // values
  // console.log(userTwo.key); dot notation will not work
}
