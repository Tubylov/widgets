export default class Widget {
    id: string;
    name: WidgetName;
    columnNumber: number;
    type: WidgetType;
    constructor(id: string, name: WidgetName, column: number, type: WidgetType) {
        this.id = id
        this.name = name
        this.columnNumber = column
        this.type = type
    }
}

export enum WidgetType {
    WEATHER = "WEATHER",
    GENERATOR = "GENERATOR"
}

export enum WidgetName {
    WEATHER = "Погода",
    GENERATOR = "Генератор"
}