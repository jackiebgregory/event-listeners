//console.log('class jan. 23')

const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

//button.addEventListener('click', (event)=> {
//  console.log(`'You clicked ${event.target.id}!'`);
//  console.log(event);
//})

const whatIsTheId = (event) => {
  console.log(`You clicked ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  }
}

button.addEventListener('click', whatIsTheId);

// TARGET 'other-btn' and on click, run whatIsTheId
const button2 = document.querySelector('#other-btn');

button2.addEventListener('click', whatIsTheId);
