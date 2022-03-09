import React, { useEffect, useRef } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
export const MapBoxFlyTo = ({lng,lat,initialZ}) => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP;
    const mapContainer = useRef(null);
    const map = useRef(null);
    useEffect(() => {
    if (map.current){
      map.current.flyTo({
        center: [lng, lat],
        speed: 1
    });
    }
    else{
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng,lat],
        zoom: initialZ 
        });
    }
    },[lng,lat,initialZ]);
  return (
    <>
        <div ref={mapContainer} className="map-container h-64"/>
    </>
  )
}