"use client";
import React, { useEffect, useState } from "react";
//@ts-ignore
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 48.87977787245571,
  lng: 2.365097161891775
};
let counter = [
  [
    8.45111340432473,
    37.005671482784024
  ],
  [
    4.168793982659906,
    36.50840081598564
  ],
  [
    3.1846885072661166,
    35.40319873747384
  ],
  [
    8.354462709009653,
    35.256721865035914
  ],
  [
    8.585147252600876,
    35.833927320216915
  ],
  [
    7.880768495619975,
    35.96668319252342
  ],
  [
    8.645835755302215,
    36.91335300566479
  ],
  [
    8.454687753556385,
    37.009008806984696
  ]
];

function MyGoogleMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "dynsight-420610",
    googleMapsApiKey: "AIzaSyD3CV0HVIycqmTuJTgoDxyoTcgf2bSSKqs",
  });
  const [map, setMap] = useState(null);
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="w-full h-full">
     
        <GoogleMap
          center={center}
          mapContainerStyle={mapContainerStyle}
          zoom={100}
        >
          <Marker position={center} />
          {counter.map((ele, index) => (
            <Polygon
              path={ele}
              key={index}
              options={{
                fillColor: "yellow",
                fillOpacity: 0.4,
                strokeColor: "#d35400",
                strokeOpacity: 0.8,
                strokeWeight: 3,
              }}
            />
          ))}
        </GoogleMap>
    </div>
  );
}

export default MyGoogleMap;
