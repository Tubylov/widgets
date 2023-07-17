import Widget from "../widgets/Widget";

export interface WidgetMoveState {
    widget: Widget | null;
}
export enum WidgetMoveActionTypes {
    SET_CURRENTWIDGET = "SET_CURRENTWIDGET"
}
interface SetCurrentWidgetAction {
    type: WidgetMoveActionTypes.SET_CURRENTWIDGET;
    payload: Widget;
}

export type WidgetMoveAction = SetCurrentWidgetAction
