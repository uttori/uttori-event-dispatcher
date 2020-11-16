declare module "event" {
    export = UttoriEvent;
    class UttoriEvent {
        constructor(label: string);
        label: string;
        callbacks: any[];
        register(callback: Function): void;
        unregister(callback: Function): void;
        validate(data: any, context?: object): Promise<any>;
        filter(data: any, context?: object): Promise<any>;
        fire(data: any, context?: object): void;
        fetch(data: any, context?: object): Promise<any[]>;
    }
}
declare module "event-dispatcher" {
    export = EventDispatcher;
    class EventDispatcher {
        static check(label: string): void;
        events: {};
        validate(label: string, data: any, context?: object): Promise<any>;
        filter(label: string, data: any, context?: object): Promise<any>;
        dispatch(label: string, data: any, context?: object): void;
        fetch(label: string, data: any, context?: object): Promise<any[]>;
        on(label: string, callback: Function): void;
        once(label: string, callback: Function): void;
        off(label: string, callback: Function): void;
    }
}
declare module "index" {
    export const EventDispatcher: typeof import("event-dispatcher");
    export const UttoriEvent: typeof import("event");
}
