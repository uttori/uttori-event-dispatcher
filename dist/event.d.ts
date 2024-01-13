export default UttoriEvent;
/**
 * Event class used in conjunction with the Event Dispatcher.
 * @property {string} label The human readable identifier of the event.
 * @property {import('../dist/custom.js').UttoriEventCallback[]} callbacks The functions to be executed when an event is fired.
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
    /** @type {import('../dist/custom.js').UttoriEventCallback<unknown, unknown>[]} */
    callbacks: import('../dist/custom.js').UttoriEventCallback<unknown, unknown>[];
    /**
     * Add a function to an event that will be called when the event is fired.
     * @param {import('../dist/custom.js').UttoriEventCallback<unknown, unknown>} callback Function to be called when the event is fired.
     * @example
     * event.register(callback);
     */
    register(callback: import('../dist/custom.js').UttoriEventCallback<unknown, unknown>): void;
    /**
     * Remove a function from an event that would be called when the event is fired.
     * @param {import('../dist/custom.js').UttoriEventCallback<unknown, unknown>} callback Function to be removed from the event.
     * @example
     * event.unregister(callback);
     */
    unregister(callback: import('../dist/custom.js').UttoriEventCallback<unknown, unknown>): void;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @async
     * @param {unknown} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @returns {Promise<boolean>} A Promise resolving to the result of the check, either true (invalid) or false (valid).
     * @example
     * const is_spam = await event.validate({ data }, this);
     */
    validate(data: unknown, context?: object): Promise<boolean>;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @async
     * @param {unknown} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @returns {Promise<unknown>} A Promise resolving to the original input data, either modified or untouched.
     * @example
     * output = await event.filter({ data }, this);
     */
    filter(data: unknown, context?: object): Promise<unknown>;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @param {unknown} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @example
     * event.fire({ data }, this);
     */
    fire(data: unknown, context?: object): void;
    /**
     * Executes all the callbacks present on an event with passed in data and context and returns their output.
     * @async
     * @param {unknown} data Data to be used by event callbacks.
     * @param {object} [context] Context to help with computing of the data.
     * @returns {Promise<unknown[]>} An array of the results from the fetch.
     * @example
     * output = await event.fetch({ data }, this);
     */
    fetch(data: unknown, context?: object): Promise<unknown[]>;
}
//# sourceMappingURL=event.d.ts.map