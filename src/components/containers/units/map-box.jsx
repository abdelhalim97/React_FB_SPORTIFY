import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
export const MapBox = () => {
  const [lng, setLng] = useState(10.612);
const [lat, setLat] = useState(35.83);
const [zoom, setZoom] = useState(12 );
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkZWxoYWxpbW0iLCJhIjoiY2s1ZTk1NDZpMjhlMzNncGE2eW5uOW5sOSJ9.q2-WhXk3XvuIHRAsxcx1pg';
    const mapContainer = useRef(null);
    const map = useRef(null);
useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng,lat],
    zoom: zoom 
    });
    });
  return (
    <>
        <div ref={mapContainer} className="map-container" />
    </>
  )
}