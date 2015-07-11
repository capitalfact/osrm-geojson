// Get a GeoJSON linestring from a Valhalla/OSRM route request
// Adapted from
// https://github.com/DennisSchiefer/Project-OSRM-Web/blob/develop/WebContent/routing/OSRM.RoutingGeometry.js
// Usage: osrmDecode(<encoded "shape" object>, 6) //(precision = 6 seems legit)
module.exports = function(encoded, precision) {
  var geojson = {};
  var len = encoded.length,
    index = 0,
    lat = 0,
    lng = 0,
    array = [];
  precision = Math.pow(10, -precision);
  while (index < len) {
    var b,
      shift = 0,
      result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += dlat;
    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    var dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += dlng;
    //coordinate order for geojson:
    array.push([lng * precision, lat * precision]);
  }
  geojson.type = "LineString";
  geojson.coordinates = array;
  return JSON.stringify(geojson);
}
