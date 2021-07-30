import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map({ geo }) {
  return (
    <MapContainer
      center={[
        geo.longitude ? geo.longitude : -0.09,
        geo.latitude ? geo.latitude : 51.505,
      ]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[
          geo.latitude ? geo.latitude : 51.505,
          geo.longitude ? geo.longitude : -0.09,
        ]}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
