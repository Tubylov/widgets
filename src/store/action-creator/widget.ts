import { Dispatch } from "redux"
import { WidgetListAction, WidgetListActionTypes } from "../../types/redux/widgets"
import Widget from "../../types/widgets/Widget"

export const addWidget = (widget: Widget) => {
    return (dispatch: Dispatch<WidgetListAction>) => {
        dispatch({type: WidgetListActionTypes.ADD_WIDGET, payload: widget})
    }
}
export const removeWidget = (widget: Widget) => {
    return (dispatch: Dispatch<WidgetListAction>) => {
        dispatch({type: WidgetListActionTypes.REMOVE_WIDGET, payload: widget})
    }
}
export const updateWidget = (widget: Widget) => {
    return (dispatch: Dispatch<WidgetListAction>) => {
        dispatch({type: WidgetListActionTypes.UPDATE_WIDGET, payload: widget})
    }
}