# osrm-geojson

A node module for decoding OSRM shapes and returning GeoJSON geometry, built to map the results of [Mapzen's Valhalla routing engine](https://mapzen.com/projects/valhalla/), but adaptible to anything using [Project OSRM](http://project-osrm.org/).

## API

```javascript
osrmDecode(encodedObject, precision)
```

- `encodedObject` is the raw shape returned by the routing API. e.g. 'egyc`A~qau~EzA?vg@?fT??~h@jAndCus@NG{k@'
- `precision` is an integer (6 is a good benchmark)

## Example

```javascript
var osrmDecode = require("osrm-geojson");
var encoded = 'egyc`A~qau~EzA?vg@?fT??~h@jAndCus@NG{k@';

console.log(osrmDecode(encoded));
// Result: '{"type":"LineString","coordinates":[[-117.27799999999999,34.157699],[-117.27799999999999,34.157652999999996],[-117.27799999999999,34.157001],[-117.27799999999999,34.156661],[-117.278672,34.156661],[-117.279702,34.156639]]}'
```

