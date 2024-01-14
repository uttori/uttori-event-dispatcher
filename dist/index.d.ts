declare namespace _default {
    export { UttoriEvent };
    export { EventDispatcher };
}
export default _default;
export { default as UttoriEvent } from "./event.js";
export { default as EventDispatcher } from "./event-dispatcher.js";
export type UttoriEventCallback<TData = any, TContext = any, TOutput = any> = (data: TData, context?: TContext) => void | Promise<TOutput>;
import UttoriEvent from './event.js';
import EventDispatcher from './event-dispatcher.js';
//# sourceMappingURL=index.d.ts.map