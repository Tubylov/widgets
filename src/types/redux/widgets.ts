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

/*
WidgetListState - интерфейс для состояния работы с виджетами (создание, удаление, обновление)
SettingsActionTypes - перечисление с типами action для работы работы с виджетами
AddWidgetListAction, RemoveWidgetListAction, UpdateWidgetListAction - интерфейсы типов action
*/