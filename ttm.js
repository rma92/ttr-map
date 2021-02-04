/*
  Given a longitude, uses left_x, right_x, and left_lon and right_lon to
  get the screen x coordinate.
*/
function lon_to_x(lon)
{
  lon_width = right_lon - left_lon;
  x_width = right_x - left_x;
  units = x_width / lon_width; //pixels per line of latitude
  return units * (lon - left_lon) + left_x;
}

function lat_to_y(lat)
{
  lat_height = top_lat - bottom_lat;
  y_height = top_y - bottom_y;
  units = y_height / lat_height;
  return units * (lat - top_lat) + top_y;
}

/*
  iterate over the city list, add a button for each city at the correct place.
*/
function createDOMCities()
{
  for( const [key, value] of Object.entries(cities))
  {
    //console.log(key + ": " + value.name);
    var b = document.createElement('BUTTON');
    var textB = document.createTextNode(value.name);
    b.appendChild(textB);
    b.className = "citybutton";
    b.id = "b_" + key;
    b.style.position = "absolute";
    b.style.left = lon_to_x(value.lon) + "px";
    b.style.top = lat_to_y(value.lat) + "px";
    document.body.appendChild(b);
  }
}

function createDOMRoutes()
{
  for( const [index, r] of routes.entries())
  {
    console.log( r.cityE + "-" + r.cityW );
    //get the location of each city
    //calculate the distance in pixels
    //create a div positioned absolute with a width equal to the distance.
    //use trig to determine the angle to rotate the div.
    //place div with x value equal to west city and y value half way between city y values.

  }
}
//initialize
createDOMCities();
createDOMRoutes();
