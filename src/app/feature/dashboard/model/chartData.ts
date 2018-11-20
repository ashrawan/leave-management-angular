export class ChartDataModel {
    public data: SerieModel[];
    constructor(data:  SerieModel[]) {
        this.data = data;
    }
}

export class SerieModel {
    public name: string;
    public series: SeriersChildModel[];
    constructor(name:  string, series: SeriersChildModel[]) {
        this.name = name;
        this.series = series;
    }
}

export class SeriersChildModel {
    public name: string;
    public value: number;
    constructor(name:  string, value: number) {
        this.name = name;
        this.value = value;
    }
}
