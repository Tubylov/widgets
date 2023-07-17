import { Dispatch } from "redux"
import { SettingsWeatherAction, SettingsWeatherActionTypes } from "../../types/redux/widgetSettingsWeather"
import Weather from "../../types/widgets/Weather"

export const openSettingsWeather = (widget: Weather) => {
    return (dispatch: Dispatch<SettingsWeatherAction>) => {
        dispatch({type: SettingsWeatherActionTypes.OPEN_SETTINGWEATHER, payload: widget})
    }
}
export const setSettingsWeather = (widget: Weather) => {
    return (dispatch: Dispatch<SettingsWeatherAction>) => {
        dispatch({type: SettingsWeatherActionTypes.SET_SETTINGWEATHER, payload: widget})
    }
}