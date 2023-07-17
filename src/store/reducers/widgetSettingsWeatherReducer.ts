import { SettingsWeatherState, SettingsWeatherActionTypes, SettingsWeatherAction } from "../../types/redux/widgetSettingsWeather";

const initialState: SettingsWeatherState = {
    isModalBox: false,
    widget: null
}

export const widgetSettingsWeatherReducer = (state = initialState, action: SettingsWeatherAction): SettingsWeatherState => {
    switch (action.type) {
        case SettingsWeatherActionTypes.OPEN_SETTINGWEATHER:
            return {isModalBox: true, widget: action.payload}
        case SettingsWeatherActionTypes.SET_SETTINGWEATHER:
            return {isModalBox: false, widget: action.payload}
        default:
            return state
    }
}