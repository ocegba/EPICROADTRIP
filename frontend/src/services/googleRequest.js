export default class Geocoder {
    static apiKey = 'AIzaSyCFbhGslbzNSfYjEocN7uARrbglGz32Q1c';

    static geocode(lat, long) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${Geocoder.apiKey}`;
      return fetch(url).then(response => response.json());
    }

    static reverseGeocode(address) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${Geocoder.apiKey}`;
      return fetch(url).then(response => response.json());
    }
  }
