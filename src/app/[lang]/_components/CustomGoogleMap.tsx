"use client";
import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";
const containerStyle = {
  width: "100%",
  height: "100%",
};

type Coordiantes = {
  lat: number;
  lng: number;
};
type Mark = {
  coordianates: Coordiantes;
  options: {
    iconUrl: string;
    size: [number, number];
  };
};
type BuildingGoogleMap = {
  id: string;
  center: Coordiantes;
  marks?: Coordiantes[];
  polygon?: Coordiantes[] | null;
  options: {
    mapId: string;
    zoom: number;
    markerStyle?: {
      iconUrl: string;
      size: [number, number];
    };
  };
};
const center = { lat: 36.9322023, lng: 8.624958 };
//const center = {  lat: -33.86723456,   lng: 151.20623456 };;
const defaultMarkerSize = [50, 50];
export default function CustomGoogleMap({
  center,
  marks,
  polygon,
  options,
}: BuildingGoogleMap) {
  const router = useRouter();
  const { isLoaded, loadError } = useJsApiLoader({
    id: (process.env.NEXT_PUBLIC_GOOGLE_MAP_PROJECT_ID as string)!,
    googleMapsApiKey: (process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY as string)!,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex-col flex justify-center items-center">
        <div>
          <span className="text-gray-500">Loading Map ...</span>
        </div>{" "}
        <TailSpin
          visible={true}
          height="20"
          width="20"
          color="#6b7280"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  const handleClickMarker = () => {
    router.push("/oo/buildings/fdsgfgdf/devices/12246546/overview");
  };

  return (
    <div className="w-full h-full">
      <GoogleMap
        options={{
          mapId: options.mapId,
          disableDefaultUI: true,
          rotateControl: true,
          tilt: 100,
          /* restriction:{
            latLngBounds:{
              north:4,
              south:4,
              west:3,
              east:34
            },
            strictBounds:false
          }   */
        }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={options.zoom}
        tilt={120}
      >
        <>
          {/* "https://www.svgrepo.com/show/270040/building-town.svg" */}
          {marks &&
            marks.map((ele, index) => (
              <Marker
                key={index}
                onClick={handleClickMarker}
                position={ele}
                icon={
                  options.markerStyle && {
                    ...(options.markerStyle && {
                      url: options.markerStyle.iconUrl,
                    }),
                    ...(options.markerStyle
                      ? {
                          scaledSize: new google.maps.Size(
                            options.markerStyle.size[0],
                            options.markerStyle.size[1]
                          ),
                        }
                      : { scaledSize: new google.maps.Size(50, 50) }),
                  }
                }
              />
            ))}
          {polygon && (
            <Polygon
              paths={polygon}
              options={{
                strokeColor: "#1e40af",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#60a5fa",
                fillOpacity: 0.2,
              }}
            />
          )}
        </>
      </GoogleMap>
    </div>
  );
}
