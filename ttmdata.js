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

cities['LAS'] = new City('Las Vegas', 36.08, -115.15);
cities['PHX'] = new City('Phoenix', 42.36, -71.00);
cities['ELP'] = new City('El Paso', 42.36, -71.00);
cities['SLC'] = new City('Salt Lake City', 42.36, -71.00);
cities['HLN'] = new City('Helena', 42.36, -71.00);
cities['YYC'] = new City('Calgary', 42.36, -71.00);
cities['DEN'] = new City('Denver', 42.36, -71.00);
cities['ABQ'] = new City('Santa Fe', 42.36, -71.00);
cities['OKC'] = new City('Oklahoma City', 42.36, -71.00);
cities['DFW'] = new City('Dallas', 42.36, -71.00);
cities['IAH'] = new City('Houston', 42.36, -71.00);
cities['OMA'] = new City('Omaha', 42.36, -71.00);
cities['YWG'] = new City('Winnipeg', 42.36, -71.00);
cities['DLH'] = new City('Duluth', 42.36, -71.00);
cities['MCI'] = new City('Kansas City', 42.36, -71.00);
cities['STL'] = new City('St Louis', 42.36, -71.00);
cities['LIT'] = new City('Little Rock', 42.36, -71.00);
cities['MSY'] = new City('New Orleans', 42.36, -71.00);
cities['ORD'] = new City('Chicago', 42.36, -71.00);
cities['BNA'] = new City('Nashville', 42.36, -71.00);
cities['ATL'] = new City('Atlanta', 42.36, -71.00);
cities['YAM'] = new City('Sault Ste Marie', 42.36, -71.00);
cities['PIT'] = new City('Pittsburg', 42.36, -71.00);
cities['YYZ'] = new City('Toronto', 42.36, -71.00);
cities['CHS'] = new City('Charleston', 42.36, -71.00);
cities['RDU'] = new City('Raleigh', 42.36, -71.00);
cities['DCA'] = new City('Washington', 42.36, -71.00);
cities['LGA'] = new City('New York', 42.36, -71.00);
cities['YUL'] = new City('Montreal', 42.36, -71.00);

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
