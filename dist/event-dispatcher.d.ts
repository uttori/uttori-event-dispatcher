export default EventDispatcher;
/**
 * An event bus system for registering, unregistering and triggering events.
 * @property {Record<string, UttoriEvent>} events The collection of events to listen for.
 * @example <caption>new EventDispatcher()</caption>
 * const bus = new EventDispatcher();
 * bus.on('update', callback);
 * bus.dispatch('update', { data }, { context });
 * bus.off('update', callback);
 * @class
 */
declare class EventDispatcher {
    /**
     * Verifies an event label.
     * @param {string} label The human readable identifier of the event.
     * @example
     * EventDispatcher.check('event'); // No Error
     * EventDispatcher.check(1); // Throws Error
     * @static
     */
    static check(label: string): void;
    /** @type {Record<string, UttoriEvent>} The collection of events to listen for. */
    events: Record<string, UttoriEvent>;
    /**
     * Fires off an event with passed in data and context for a given label.
     * @async
     * @param {string} label The human readable identifier of the event.
     * @param {any} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @returns {Promise<boolean>} The conclusion of the spam checks, true being it is spam, false meaning it is clean.
     * @example
     * is_spam = await bus.validate('check-for-spam', { data }, this);
     */
    validate(label: string, data: any, context?: object): Promise<boolean>;
    /**
     * Fires off an event with passed in data and context for a given label.
     * @async
     * @template T The type of the data being processed.
     * @param {string} label The human readable identifier of the event.
     * @param {any} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @returns {Promise<T>} The original input data, either modified or untouched.
     * @example
     * output = await bus.filter('loaded', { data }, this);
     */
    filter<T>(label: string, data: any, context?: object): Promise<T>;
    /**
     * Fires off an event with passed in data and context for a given label.
     * @template T The type of the data being processed.
     * @param {string} label The human readable identifier of the event.
     * @param {any} data Data to be used, updated, or modified by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @example
     * bus.dispatch('loaded', { data }, this);
     */
    dispatch<T_1>(label: string, data: any, context?: object): void;
    /**
     * Fires off an event with passed in data and context for a given label and returns an array of the results.
     * @async
     * @template T The type of the data being processed.
     * @param {string} label The human readable identifier of the event.
     * @param {any} data Data to be used by event callbacks.
     * @param {object} [context] Context to help with updating or modification of the data.
     * @returns {Promise<T[]>} An array of the results.
     * @example
     * popular = await bus.fetch('popular-documents', { limit: 10 }, this);
     */
    fetch<T_2>(label: string, data: any, context?: object): Promise<T_2[]>;
    /**
     * Add a function to an event that will be called when the label is dispatched.
     * If no label is found, one is created.
     * @param {string} label The human readable identifier of the event.
     * @param {import('../dist/custom.js').UttoriEventCallback<any, any>} callback Function to be called when the event is fired.
     * @example
     * bus.on('loaded', callback);
     */
    on(label: string, callback: import('../dist/custom.js').UttoriEventCallback<any, any>): void;
    /**
     * Add a function to an event that will be called only once when the label is dispatched.
     * Uses the `EventDispatcher.on` method with a function wrapped to call off on use.
     * @param {string} label The human readable identifier of the event.
     * @param {import('../dist/custom.js').UttoriEventCallback<any, any>} callback Function to be called when the event is fired.
     * @example
     * bus.once('one-time-process', callback);
     */
    once(label: string, callback: import('../dist/custom.js').UttoriEventCallback<any, any>): void;
    /**
     * Remove a function from an event.
     * @param {string} label The human readable identifier of the event.
     * @param {import('../dist/custom.js').UttoriEventCallback<any, any>} callback Function to be removed.
     * @example
     * bus.off('loaded', callback);
     */
    off(label: string, callback: import('../dist/custom.js').UttoriEventCallback<any, any>): void;
}
import UttoriEvent from './event.js';
//# sourceMappingURL=event-dispatcher.d.ts.map