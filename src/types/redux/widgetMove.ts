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

/*
WidgetMoveState - интерфейс для состояния работы с перемещением виджетов
WidgetMoveActionTypes - перечисление с типами action для работы с перемещением виджетов
SetCurrentWidgetAction - интерфейс типа action
*/