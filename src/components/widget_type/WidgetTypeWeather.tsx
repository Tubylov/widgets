import React, { useEffect, useState } from 'react';
import './WidgetTypeWeather.css';
import { config } from "../../config"
import Icons from '../Icons'
import axios from 'axios';

interface WidgetTypeWeatherProps {
  city: string;
}

const WidgetTypeWeather: React.FC<WidgetTypeWeatherProps> = ({city}) => {


  const[fetchWeather, setFetchWeather] = useState({temperature: 0, error: ''})
  const[loading, setLoading] = useState(false)

  
  useEffect(() => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${config.WeatherAPIKey}`
    //fetchWeather(city, widget.id)
    setLoading(true)
    axios.get(api).then((response) => {
      setFetchWeather({
        temperature: Math.round(response.data.main.temp),
        error: ''
      })
      setLoading(false)
    }).catch((e) => setFetchWeather({temperature: 0, error: 'Ошибка загрузки'}))

  }, [city])

  if (fetchWeather.error) {
    return (
      <div className="WidgetTypeWeather">
        <p className="WidgetTypeWeather__error">{fetchWeather.error}</p>
      </div>
    )
  }

  return (
    <div className="WidgetTypeWeather">
      {
        loading ?
          <p className="WidgetTypeWeather__temperature"><Icons name='loader'/></p>
        :
          <>
            <p className="WidgetTypeWeather__temperature">{fetchWeather.temperature + '\u00b0'}C</p>
            <p className="WidgetTypeWeather__city">{city}</p>
          </>
      }
    </div>
  );
}

export default WidgetTypeWeather;
