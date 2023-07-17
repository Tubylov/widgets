import Widget, { WidgetName, WidgetType } from "./Widget";

export default class Generator extends Widget {
    typeGenerator: TypeGenerator
    constructor(id: string, name: WidgetName, column: number, typeGenerator: TypeGenerator, type: WidgetType) {
        super(id, name, column, type)
        this.typeGenerator = typeGenerator
    }
}

export enum TypeGenerator {
    RANDOM_NUMBER = "Случайные числа",
    UUID = "Генератор UUID"
}

/*
class Generator - Наследник класса Widget для виджета Генератор с дополнительным полем Тип генератора
*/