import Widget from "./Widget";

export default class Weather extends Widget {
    temperature: number = 0
    city: string
    constructor(id: string, name: string, column: number, city: string) {
        super(id, name, column)
        this.city = city
    }
}