function scuberGreetingForFeet(someValue) {
    if (someValue <= 400) {
      return 'This one is on me!';
    }
    else if (someValue >= 400 && someValue <= 2000) {
      return 'That will be twenty bucks.';
    }
    else if (someValue === 2001) {
      return 'I will gladly take your thirty bucks.';
    }
    else if (someValue === 2501) {
      return 'No can do.';
    }

}



function ternaryCheckCity(cityName) { 
  let results =  (cityName === 'NYC') ?  'Ok, sounds good.' : 'No go.'
  return results

}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default: 
      return 'Bye.'   
  }
}