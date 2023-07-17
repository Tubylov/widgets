import Widget, { WidgetName, WidgetType } from "./Widget";

export default class Weather extends Widget {
    temperature: number = 0
    city: string
    constructor(id: string, name: WidgetName, column: number, city: string, type: WidgetType) {
        super(id, name, column, type)
        this.city = city
    }
}