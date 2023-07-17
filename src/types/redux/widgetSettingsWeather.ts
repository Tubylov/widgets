import Weather from "../widgets/Weather";

export interface SettingsWeatherState {
    isModalBox: boolean;
    widget: Weather | null;
}
export enum SettingsWeatherActionTypes {
    SET_SETTINGWEATHER = "SET_SETTINGWEATHER",
    OPEN_SETTINGWEATHER = "OPEN_SETTINGWEATHER"
}
interface SetSettingsWeatherAction {
    type: SettingsWeatherActionTypes.SET_SETTINGWEATHER;
    payload: Weather;
}
interface OpenSettingsWeatherAction {
    type: SettingsWeatherActionTypes.OPEN_SETTINGWEATHER;
    payload: Weather;
}

export type SettingsWeatherAction = SetSettingsWeatherAction | OpenSettingsWeatherAction
