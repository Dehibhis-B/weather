import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import { Weather } from './components/Weather'
import Loader from './components/Loader'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (post) => {
    const lat = post.coords.latitude
    const lon = post.coords.longitude
    const API_KEY = "582e2016f708447f97937ab55c9ee38a"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    console.log(URL)

    axios.get(URL)
    .then(({data}) =>setWeatherInfo(data))
    .catch(({err}) =>console.log(err))
  }

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(success);
  },[])

  return (
    <main className='bg-black min-h-screen text-black flex justify-center items-center font-principal-font p-2'>

      <div className="">
          
          <div className="">
            {
              weatherInfo ? <Weather weatherInfo={weatherInfo} /> : <Loader/>
            }
          </div>
      </div>
      
      
      
    </main>
  )
}

export default App
