function Mapper(map,lat,lng,zoom) {

    this.leafletMap = L.map(map).setView([lat,lng], zoom);
    this.markers = [];

    L.tileLayer.grayscale('http://{s}.tiles.mapbox.com/v3/dquinta.i7j70p5b/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://www.mapbox.com">MapBox</a>',
        maxZoom: 18
    }).addTo(this.leafletMap);

    this.addMarker = function(lat,lng) {
        var marker = L.marker([lat, lng]).addTo(this.leafletMap);
        this.markers.push(marker);
        return marker;
    }
}