import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LatLngTuple, Icon } from "leaflet";

type Props = {
  lat: number;
  lng: number;
};

export const LeafletMap = ({ lat, lng }: Props) => {
  const defaultLatLng: LatLngTuple = [lat, lng];
  const zoom: number = 17;
  const icon = new Icon({ iconUrl: "/icon-location.svg" });

  return (
    <Map id="map-element" center={defaultLatLng} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
      <Marker position={defaultLatLng} icon={icon} />
    </Map>
  );
};
