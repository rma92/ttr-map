/*
  iterate over the city list, add a button for each city at the correct place.
*/
function createDOMCities()
{
  for( const [key, value] of Object.entries(cities))
  {
    console.log(key + ": " + value.name);
  }
}

createDOMCities();
