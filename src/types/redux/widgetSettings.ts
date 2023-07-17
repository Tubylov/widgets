import Widget from "../widgets/Widget";

export interface SettingsState {
    isModalBox: boolean;
    widget: Widget;
}
export enum SettingsActionTypes {
    SET_SETTINGWEATHER = "SET_SETTINGWEATHER",
    OPEN_SETTINGWEATHER = "OPEN_SETTINGWEATHER"
}
interface SetSettingsAction {
    type: SettingsActionTypes.SET_SETTINGWEATHER;
    payload: Widget;
}
interface OpenSettingsAction {
    type: SettingsActionTypes.OPEN_SETTINGWEATHER;
    payload: Widget;
}

export type SettingsAction = SetSettingsAction | OpenSettingsAction

/*
SettingsState - интерфейс для состояния работы с окном настроек виджета
SettingsActionTypes - перечисление с типами action для работы с окном настроек виджета
SetSettingsAction и OpenSettingsAction - интерфейсы типов action
*/