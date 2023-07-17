import React, { useEffect } from 'react';
import './WidgetTypeWeather.css';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Icons from '../Icons'
import Widget from '../../types/widgets/Widget';
import Weather from '../../types/widgets/Weather';

interface WidgetTypeWeatherProps {
  city: string;
  widget: Weather
}

const WidgetTypeWeather: React.FC<WidgetTypeWeatherProps> = ({city, widget}) => {

  let widgets: Widget[] = useTypedSelector(state => state.widgetList.widgets)
  const {fetchWeather} = useActions()
  const {widgetID, temperature, error, loading} = useTypedSelector(state => state.widgetWeather)

  useEffect(() => {
    fetchWeather(city, widget.id)
  }, [widgets])

  if (error) {
    return (
      <div className="WidgetTypeWeather">
        <p className="WidgetTypeWeather__error">{error}</p>
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
            <p className="WidgetTypeWeather__temperature">{temperature + '\u00b0'}C</p>
            <p className="WidgetTypeWeather__city">{city}</p>
          </>
      }
    </div>
  );
}

export default WidgetTypeWeather;
