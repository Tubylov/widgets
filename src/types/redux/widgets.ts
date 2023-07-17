import Widget from "../widgets/Widget";

export interface WidgetListState {
    widgets: Widget[];
}
export enum WidgetListActionTypes {
    ADD_WIDGET = "ADD_WIDGET",
    REMOVE_WIDGET = "REMOVE_WIDGET",
    UPDATE_WIDGET = "UPDATE_WIDGET"
}
interface AddWidgetListAction {
    type: WidgetListActionTypes.ADD_WIDGET;
    payload: Widget;
}
interface RemoveWidgetListAction {
    type: WidgetListActionTypes.REMOVE_WIDGET;
    payload: Widget;
}
interface UpdateWidgetListAction {
    type: WidgetListActionTypes.UPDATE_WIDGET;
    payload: Widget;
}

export type WidgetListAction = AddWidgetListAction | RemoveWidgetListAction | UpdateWidgetListAction
