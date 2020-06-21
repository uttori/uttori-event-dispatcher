/**
 * Creates a new EventDispatcher instance.
 * @example
 * <caption>new EventDispatcher()</caption>
 * const bus = new EventDispatcher();
 * bus.on('update', callback);
 * bus.dispatch('update', { data }, { context });
 * bus.off('update', callback);
 * @property events - The collection of events to listen for.
 */
declare class EventDispatcher {
    /**
     * Verifies an event label.
     * @example
     * EventDispatcher.check('event'); // No Error
     * EventDispatcher.check(1); // Throws Error
     * @param label - The human readable identifier of the event.
     */
    static check(label: string): void;
    /**
     * Fires off an event with passed in data and context for a given label.
     * @example
     * is_spam = await bus.validate('check-for-spam', { data }, this);
     * @param label - The human readable identifier of the event.
     * @param data - Data to be used, updated, or modified by event callbacks.
     * @param [context] - Context to help with updating or modification of the data.
     * @returns - The conclusion of the spam checks, true being it is spam, false meaning it is clean.
     */
    validate(label: string, data: any, context?: any): Promise;
    /**
     * Fires off an event with passed in data and context for a given label.
     * @example
     * output = await bus.filter('loaded', { data }, this);
     * @param label - The human readable identifier of the event.
     * @param data - Data to be used, updated, or modified by event callbacks.
     * @param [context] - Context to help with updating or modification of the data.
     * @returns - The original input data, either modified or untouched.
     */
    filter(label: string, data: any, context?: any): any;
    /**
     * Fires off an event with passed in data and context for a given label.
     * @example
     * bus.dispatch('loaded', { data }, this);
     * @param label - The human readable identifier of the event.
     * @param data - Data to be used, updated, or modified by event callbacks.
     * @param [context] - Context to help with updating or modification of the data.
     */
    dispatch(label: string, data: any, context?: any): void;
    /**
     * Fires off an event with passed in data and context for a given label and returns an array of the results.
     * @example
     * popular = await bus.fetch('popular-documents', { limit: 10 }, this);
     * @param label - The human readable identifier of the event.
     * @param data - Data to be used by event callbacks.
     * @param [context] - Context to help with updating or modification of the data.
     * @returns - An array of the results.
     */
    fetch(label: string, data: any, context?: any): Promise<any[]>;
    /**
     * Add a function to an event that will be called when the label is dispatched.
     * If no label is found, one is created.
     * @example
     * bus.on('loaded', callback);
     * @param label - The human readable identifier of the event.
     * @param callback - Function to be called when the event is fired.
     */
    on(label: string, callback: (...params: any[]) => any): void;
    /**
     * Add a function to an event that will be called only once when the label is dispatched.
     * Uses the `EventDispatcher.on` method with a function wrapped to call off on use.
     * @example
     * bus.once('one-time-process', callback);
     * @param label - The human readable identifier of the event.
     * @param callback - Function to be called when the event is fired.
     */
    once(label: string, callback: (...params: any[]) => any): void;
    /**
     * Remove a function from an event.
     * @example
     * bus.off('loaded', callback);
     * @param label - The human readable identifier of the event.
     * @param callback - Function to be removed.
     */
    off(label: string, callback: (...params: any[]) => any): void;
    /**
     * The collection of events to listen for.
    */
    events: any;
}

/**
 * Creates a new event UttoriEvent.
 * @example
 * <caption>new UttoriEvent(label)</caption>
 * const event = new UttoriEvent('event-label');
 * event.register(callback);
 * event.fire({ data });
 * @property label - The human readable identifier of the event.
 * @property callbacks - The functions to be executed when an event is fired.
 * @param label - The human readable identifier of the event.
 */
declare class UttoriEvent {
    constructor(label: string);
    /**
     * Add a function to an event that will be called when the event is fired.
     * @example
     * event.register(callback);
     * @param callback - Function to be called when the event is fired.
     */
    register(callback: (...params: any[]) => any): void;
    /**
     * Remove a function from an event that would be called when the event is fired.
     * @example
     * event.unregister(callback);
     * @param callback - Function to be removed from the event.
     */
    unregister(callback: (...params: any[]) => any): void;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @example
     * is_spam = await event.validate({ data }, this);
     * @param data - Data to be used, updated, or modified by event callbacks.
     * @param [context] - Context to help with updating or modification of the data.
     * @returns - A Promise resolving to the result of the check, either true (invalid) or false (valid).
     */
    validate(data: any, context?: any): Promise;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @example
     * output = await event.filter({ data }, this);
     * @param data - Data to be used, updated, or modified by event callbacks.
     * @param [context] - Context to help with updating or modification of the data.
     * @returns - A Promise resolving to the original input data, either modified or untouched.
     */
    filter(data: any, context?: any): Promise;
    /**
     * Executes all the callbacks present on an event with passed in data and context.
     * @example
     * event.fire({ data }, this);
     * @param data - Data to be used, updated, or modified by event callbacks.
     * @param [context] - Context to help with updating or modification of the data.
     */
    fire(data: any, context?: any): void;
    /**
     * Executes all the callbacks present on an event with passed in data and context and returns their output.
     * @example
     * output = await event.fetch({ data }, this);
     * @param data - Data to be used by event callbacks.
     * @param [context] - Context to help with computing of the data.
     * @returns - An array of the results from the fetch.
     */
    fetch(data: any, context?: any): Promise<any[]>;
    /**
     * The human readable identifier of the event.
    */
    label: string;
    /**
     * The functions to be executed when an event is fired.
    */
    callbacks: ((...params: any[]) => void)[];
}

