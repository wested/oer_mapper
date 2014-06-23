function Mapper(map,lat,lng,zoom) {

//     PRIVATE VARIABLES
    var mapboxLayer = L.tileLayer.grayscale('http://{s}.tiles.mapbox.com/v3/dquinta.i7j70p5b/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://www.mapbox.com">MapBox</a>',
        maxZoom: 18
    });

    var leafletMap = L.map(map)
        .setView([lat,lng], zoom)
        .addLayer(mapboxLayer);

    var markers;

//    PUBLIC FUNCTIONS
    this.addMarker = function(lat,lng,subject,org) {
        var marker = L.marker([lat, lng],{
            icon: iconFor(subject)
        });
        marker.bindPopup($("#marker_tmpl").jqote(org,"*"),{showOnMouseOver: true});
        markers.addLayer(marker);
    };
    this.removeMarkers = function() {
        leafletMap.removeLayer(markers);
        initializeMarkers();
    };

//    PRIVATE FUNCTIONS
    var initializeMarkers = function () {
        markers = new L.FeatureGroup();
        leafletMap.addLayer(markers);
    };
    var iconFor = function(subject) {
        return L.divIcon({
            className: 'svg-marker',
            html: '<div class="' + subject + '"></div>',
            iconSize: null,
            iconAnchor: null
        });
    };

//    INIT
    initializeMarkers();

}