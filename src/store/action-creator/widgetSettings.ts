import { Dispatch } from "redux"
import { SettingsAction, SettingsActionTypes } from "../../types/redux/widgetSettings"
import Widget from "../../types/widgets/Widget"

export const openSettings = (widget: Widget) => {
    return (dispatch: Dispatch<SettingsAction>) => {
        dispatch({type: SettingsActionTypes.OPEN_SETTINGWEATHER, payload: widget})
    }
}
export const setSettings = (widget: Widget) => {
    return (dispatch: Dispatch<SettingsAction>) => {
        dispatch({type: SettingsActionTypes.SET_SETTINGWEATHER, payload: widget})
    }
}