import UttoriEvent from './event.js';
import EventDispatcher from './event-dispatcher.js';

/**
 * @template [TData=any] The data type passed to the callback. Defaults to any if not specified.
 * @template [TContext=any] The context type for the callback. Defaults to any if not specified.
 * @template [TOutput=any] The output type of the callback. Defaults to any if not specified.
 * @callback UttoriEventCallback
 * @param {TData} data - The data passed to the callback.
 * @param {TContext} [context] - The optional context for the callback.
 * @returns {void | Promise<TOutput>} - The return value of the callback, which can be a promise.
 */

export default {
  UttoriEvent,
  EventDispatcher,
};

export { default as UttoriEvent } from './event.js';
export { default as EventDispatcher } from './event-dispatcher.js';
