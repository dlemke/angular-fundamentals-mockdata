import { ISessionModel } from './ISessionModel';

export interface IEventModel {
    id: number;
    name: string;
    date: Date;
    time: string;
    price: number;
    imageUrl: string;
    location?: {
        address: string;
        city: string;
        country: string;
    },
    onlineUrl?: string;
    sessions: ISessionModel[];
}
