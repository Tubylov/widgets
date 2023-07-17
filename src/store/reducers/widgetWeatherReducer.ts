import { WeatherAction, FetchWeatherActionTypes, FetchWeatherState } from "../../types/redux/widgetFetchWeather";

const initialState: FetchWeatherState = {
    widgetID: '',
    temperature: 0,
    loading: false,
    error: null
}

export const widgetWeatherReducer = (state = initialState, action: WeatherAction): FetchWeatherState => {
    switch (action.type) {
        case FetchWeatherActionTypes.FETCH_WHEATHER:
            return {loading: true, error: null, temperature: 0, widgetID: ''}
        case FetchWeatherActionTypes.FETCH_WHEATHER_SUCCESS:
            return {loading: false, error: null, temperature: action.payload.temp, widgetID: action.payload.widgetID}
        case FetchWeatherActionTypes.FETCH_WHEATHER_ERROR:
            return {loading: false, error: action.payload, temperature: 0, widgetID: ''}
        default:
            return state
    }
}