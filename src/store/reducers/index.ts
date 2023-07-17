import { combineReducers } from "redux";
import { widgetListReducer } from "./widgetListReducer";
import { widgetMoveReducer } from "./widgetMoveReducer";
import { widgetWeatherReducer } from "./widgetWeatherReducer";
import { widgetSettingsWeatherReducer } from "./widgetSettingsWeatherReducer";


export const rootReducer = combineReducers({
    widgetList: widgetListReducer,
    widgetMove: widgetMoveReducer,
    widgetWeather: widgetWeatherReducer,
    widgetSettingsWeather: widgetSettingsWeatherReducer
})

export type RootState = ReturnType<typeof rootReducer>