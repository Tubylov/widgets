import { SettingsState, SettingsActionTypes, SettingsAction } from "../../types/redux/widgetSettings";
import { WidgetName, WidgetType } from "../../types/widgets/Widget";

const initialState: SettingsState = {
    isModalBox: false,
    widget: {
        id: '',
        name: WidgetName.WEATHER,
        columnNumber: 1,
        type: WidgetType.WEATHER
    }
}

export const widgetSettingsReducer = (state = initialState, action: SettingsAction): SettingsState => {
    switch (action.type) {
        case SettingsActionTypes.OPEN_SETTINGWEATHER:
            return {isModalBox: true, widget: action.payload}
        case SettingsActionTypes.SET_SETTINGWEATHER:
            return {isModalBox: false, widget: action.payload}
        default:
            return state
    }
}