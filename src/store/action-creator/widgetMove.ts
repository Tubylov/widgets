import { Dispatch } from "redux"
import { WidgetMoveAction, WidgetMoveActionTypes } from "../../types/redux/widgetMove"
import Widget from "../../types/widgets/Widget"

export const setCurrentWidget = (widget: Widget) => {
    return (dispatch: Dispatch<WidgetMoveAction>) => {
        dispatch({type: WidgetMoveActionTypes.SET_CURRENTWIDGET, payload: widget})
    }
}
