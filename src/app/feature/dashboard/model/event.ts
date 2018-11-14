export class Event {
    eventId: number;
    title: string;
    eventType: string;
    startDate: Date;
    endDate: Date;

    constructor(id) {
        this.eventId = id;
    }
}
