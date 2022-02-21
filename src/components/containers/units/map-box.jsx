import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
export const MapBox = ({lng,setLng,lat,setLat}) => {
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
    useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      // setZoom(map.current.getZoom().toFixed(2));
      });
      });
      console.log(lat)
  return (
    <>
        <div ref={mapContainer} className="map-container" className='h-64'/>
    </>
  )
}