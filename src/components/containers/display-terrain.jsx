import React, {  useState } from 'react'
import { MapBox } from './units'
export const DisplayTerrain = (props) => {
  const [lat, setLat] = useState(props.lat)
  const [lng, setLng] = useState(props.lng)
  return (
    <>
        <MapBox lat={lat} lng={lng} setLat={setLat} setLng={setLng} initialZ={18}/>
        
    </>
  )
}
