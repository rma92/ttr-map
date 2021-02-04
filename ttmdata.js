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
cities['PHX'] = new City('Phoenix', 33.43, -112.01);
cities['ELP'] = new City('El Paso', 31.80, -106.37);
cities['SLC'] = new City('Salt Lake City', 40.78, -111.97);
cities['HLN'] = new City('Helena', 46.60, -111.98);
cities['YYC'] = new City('Calgary', 51.12, -114.01);
cities['DEN'] = new City('Denver', 39.86, -104.67);

cities['ABQ'] = new City('Santa Fe', 35.03, -106.60);
cities['OKC'] = new City('Oklahoma City', 35.39, -97.60);
cities['DFW'] = new City('Dallas', 32.90, -97.04);
cities['IAH'] = new City('Houston', 29.98, -95.34);
cities['OMA'] = new City('Omaha', 41.30, -95.89);
cities['YWG'] = new City('Winnipeg', 49.91, -97.24);
cities['DLH'] = new City('Duluth', 46.84, -92.19);
cities['MCI'] = new City('Kansas City', 39.30, -94.71);
cities['STL'] = new City('St Louis', 38.74, -90.37);
cities['LIT'] = new City('Little Rock', 34.73, -92.22);
cities['MSY'] = new City('New Orleans', 29.99, -90.26);
cities['ORD'] = new City('Chicago', 41.98, -87.90);
cities['BNA'] = new City('Nashville', 36.12, -86.68);
cities['ATL'] = new City('Atlanta', 33.64, -84.42);
cities['YAM'] = new City('Sault Ste Marie', 46.49, -84.51);
cities['PIT'] = new City('Pittsburg', 40.49, -80.23);
cities['YYZ'] = new City('Toronto', 43.68, -79.63);
cities['CHS'] = new City('Charleston', 32.90, -80.04);
cities['RDU'] = new City('Raleigh', 35.87, -78.78);
cities['DCA'] = new City('Washington', 38.85, -77.04);
cities['LGA'] = new City('New York', 40.77, -73.87);
cities['YUL'] = new City('Montreal', 45.47, -73.74);

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
