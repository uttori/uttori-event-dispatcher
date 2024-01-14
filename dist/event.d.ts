export default UttoriEvent;
/**
 * Event class used in conjunction with the Event Dispatcher.
 * @property {string} label The human readable identifier of the event.
 * @property {import('./index.js').UttoriEventCallback[]} callbacks The functions to be executed when an event is fired.
 * @example
 * const event = new UttoriEvent('event-label');
 * event.register(callback);
 * event.fire({ data });
 * @class
 */
declare class UttoriEvent {
    /**
     * Creates a new event UttoriEvent.
     * @param {string} label The human readable identifier of the event.
     * @class
     */
    constructor(label: string);
    /** @type {string} */
    label: string;
    /** @type {import('./index.js').UttoriEventCallback[]} */
    callbacks: import('./index.js').UttoriEventCallback[];
    /**
     * Add a function to an event that will be called when the event is fired.
     * @param {import('./index.js').UttoriEventCallback} callback Function to be called when the event is fired.
     * @example
     * event.register(callback);
     */
    register(callback: import('./index.js').UttoriEventCallback): void;
    /**
     * Remove a function from an event that would be called when the event is fired.
     * @param {import('./index.js').UttoriEventCallback} callback Function to be removed from the event.
     * @example
     * event.unregister(callback);
     */
    unregister(callback: import('./index.js').UttoriEventCallback): void;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @async
     * @template T The type of the data being processed.
     * @param {T} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @returns {Promise<boolean>} A Promise resolving to the result of the check, either true (invalid) or false (valid).
     * @example
     * const is_spam = await event.validate({ data }, this);
     */
    validate<T>(data: T, context?: object): Promise<boolean>;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @async
     * @template T The type of the data being processed.
     * @param {any} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @returns {Promise<T>} A Promise resolving to the original input data, either modified or untouched.
     * @example
     * output = await event.filter({ data }, this);
     */
    filter<T_1>(data: any, context?: object): Promise<T_1>;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @param {any} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @example
     * event.fire({ data }, this);
     */
    fire(data: any, context?: object): void;
    /**
     * Executes all the callbacks present on an event with passed in data and context and returns their output.
     * @async
     * @template T The type of the data being processed.
     * @param {any} data Data to be used by event callbacks.
     * @param {object} [context] Context to help with computing of the data.
     * @returns {Promise<T[]>} An array of the results from the fetch.
     * @example
     * output = await event.fetch({ data }, this);
     */
    fetch<T_2>(data: any, context?: object): Promise<T_2[]>;
}
//# sourceMappingURL=event.d.ts.map