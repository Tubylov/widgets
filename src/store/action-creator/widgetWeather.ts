import { Dispatch } from "redux"
import { WeatherAction, FetchWeatherActionTypes } from "../../types/redux/widgetFetchWeather"
import axios from "axios"
import { config } from "../../config"


export const fetchWeather = (city: string, widgetID: string) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: FetchWeatherActionTypes.FETCH_WHEATHER})
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${config.WeatherAPIKey}`
            const response = await axios.get(api)
            dispatch({type: FetchWeatherActionTypes.FETCH_WHEATHER_SUCCESS, payload: {temp: Math.round(response.data.main.temp), widgetID: widgetID}})
        } catch (e) {
            dispatch({type: FetchWeatherActionTypes.FETCH_WHEATHER_ERROR, payload: 'Ошибка загрузки'})
        }
    }
}