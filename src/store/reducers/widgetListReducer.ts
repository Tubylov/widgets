import { WidgetListAction, WidgetListActionTypes, WidgetListState } from "../../types/redux/widgets";

const initialState: WidgetListState = {
    widgets: []
}

export const widgetListReducer = (state = initialState, action: WidgetListAction): WidgetListState => {
    switch (action.type) {
        case WidgetListActionTypes.ADD_WIDGET:
            return {...state, widgets: [...state.widgets, action.payload]}
        case WidgetListActionTypes.REMOVE_WIDGET:
            console.log(action.payload.id)
            return {...state, widgets: state.widgets.filter(widget => widget.id !== action.payload.id)}
        case WidgetListActionTypes.UPDATE_WIDGET:
            const index = state.widgets.findIndex(item => item.id === action.payload.id)
            state.widgets[index] = action.payload
            return {...state, widgets: [...state.widgets]}
        default:
            return state
    }
}