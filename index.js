function scuberGreetingForFeet(someValue){
  // Write your code here!
  //let message
  if (someValue <= 400){
    return "This one is on me!";
  }
  else if (someValue <=2000){
    return 'That will be twenty bucks.';
  }
  else if (someValue<=2500){
    return 'I will gladly take your thirty bucks.';
  }
  else
    return 'No can do.'
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return cityName =="NYC" ? "Ok, sounds good." : 'No go.';
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch (tipAmount){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}
  