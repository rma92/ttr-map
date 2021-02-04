function City(name, lat, lon)
{
  this.name = name;
  this.lat = lat;
  this.lon = lon;
}

var cities = {};
cities['SEA'] = new City('Seattle', 47.45, -122.30);
cities['PDX'] = new City('Portland', 45.58, -122.60);
cities['YVR'] = new City('Vancouver', 49.19, -123.18);
cities['SFO'] = new City('San Francisco', 37.6, -122.37);
cities['LAX'] = new City('Los Angeles', 33.94, -118.40);
cities['BOS'] = new City('Boston', 42.36, -71.00);
cities['MIA'] = new City('Miami', 25.80, -80.29);

var left_lon = -125;
var right_lon = -69;
var top_lat = 51;
var bottom_lat = 23;

var left_x = 10; //the left margin for the board
var right_x = 810; //the right margin for the board
var top_y = 10; //the top margin for the board
var bottom_y = 510; //the bottom margin for the board
