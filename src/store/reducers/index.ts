import { combineReducers } from "redux";
import { widgetListReducer } from "./widgetListReducer";
import { widgetMoveReducer } from "./widgetMoveReducer";
import { widgetSettingsReducer } from "./widgetSettingsReducer";


export const rootReducer = combineReducers({
    widgetList: widgetListReducer,
    widgetMove: widgetMoveReducer,
    widgetSettings: widgetSettingsReducer
})

export type RootState = ReturnType<typeof rootReducer>