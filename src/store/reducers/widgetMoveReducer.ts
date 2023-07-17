import { WidgetMoveState, WidgetMoveActionTypes, WidgetMoveAction } from "../../types/redux/widgetMove";

const initialState: WidgetMoveState = {
    widget: null
}

export const widgetMoveReducer = (state = initialState, action: WidgetMoveAction): WidgetMoveState => {
    switch (action.type) {
        case WidgetMoveActionTypes.SET_CURRENTWIDGET:
            return {...state, widget: action.payload}
        default:
            return state
    }
}