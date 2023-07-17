import Widget, { WidgetName, WidgetType } from "./Widget";

export default class Weather extends Widget {
    city: string
    constructor(id: string, name: WidgetName, column: number, city: string, type: WidgetType) {
        super(id, name, column, type)
        this.city = city
    }
}

/*
class Weather - Наследник класса Widget для виджета Погоды с дополнительным полем Город
*/