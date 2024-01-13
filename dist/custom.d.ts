export type UttoriEventCallback<TData, TContext = any> = (data: TData, context?: TContext) => void | Promise<any>;
