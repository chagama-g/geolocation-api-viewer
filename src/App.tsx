import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [id, setId] = useState<number | null>(null);
  const [pos, setPos] = useState<GeolocationPosition>();
  const successCallback = (pos: GeolocationPosition) => {
    console.log(pos);
    setPos(pos);
  };

  useEffect(() => {
    if (id === null) {
      console.log("watchPosition");
      const id = navigator.geolocation.watchPosition(successCallback);
      setId(id);
    }
  }, []);

  return (
    <>
      <div className="position">
        {
          pos ?
            <>
              <p>lat: {pos.coords.latitude}</p>
              <p>long: {pos.coords.longitude}</p>
              <a href={`https://maps.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`} target="_blank" rel="noopener noreferrer">Google Map</a>
              <p>altitude: {pos.coords.altitude}</p>
            </> : <p>falsly</p>
        }
      </div>
    </>
  )
}

export default App
