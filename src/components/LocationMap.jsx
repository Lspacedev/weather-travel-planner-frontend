import { useState, useRef, useEffect } from "react";
import leaflet from "leaflet";
function LocationMap({ theme, lat, lon }) {
  const mapRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    var container = leaflet.DomUtil.get("map");

    if (container != null) {
      container._leaflet_id = null;
    }
    mapRef.current = leaflet.map("map").setView([lat, lon], 13);
    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(mapRef.current);
  }, [lat, lon]);
  useEffect(() => {
    markerRef.current = leaflet.marker([lat, lon]).addTo(mapRef.current);
  }, [lat, lon]);
  return (
    <div className={`LocationMap ${theme}`}>
      <div id="map" ref={mapRef}></div>
    </div>
  );
}
export default LocationMap;
