export type UttoriEventCallback<TData = any, TContext = any, TOutput = any> = (data: TData, context?: TContext) => void | Promise<TOutput>;
