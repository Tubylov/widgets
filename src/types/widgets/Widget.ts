export default class Widget {
    id: string;
    name: string;
    columnNumber: number;
    constructor(id: string, name: string, column: number) {
        this.id = id
        this.name = name
        this.columnNumber = column
    }
}