import { useEffect, useRef } from "react"
import mapImg from '../assets/map-img.jpg'

const Map = () => {
    const mapRef = useRef(null);

    useEffect(()=>{
      mapRef.current.setZoomLevel(1);
    },[])

  return (
    <div>
      <div>
        <img ref={mapRef} src={mapImg} alt="World Map" width={400} />
      </div>
    </div>
  )
}

export default Map