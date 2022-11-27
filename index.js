function scuberGreetingForFeet(greeting){
 let outcome
 if(greeting<=400)
{
  outcome='This one is on me!';

}
else if(greeting>2000 && greeting<=2500)
{
  outcome='I will gladly take your thirty bucks.';
}
else if(greeting>2000)
{
  outcome='No can do.';
}
return (outcome);
}
function ternaryCheckCity(city)
{
  let destination;
  destination=city=="NYC"? "Ok, sounds good.":"No go.";
  return(destination);
}
function switchOnCharmFromTip(tip)
{
  switch(tip)
  {
    case"generous":
    return("Thank you so much.");

    case " not as generous":
      return( "Bye");

      case"not as generous":
      return("Thank you.");

      default:
        return("Bye.");
        
      
  }
}
    
