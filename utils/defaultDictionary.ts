// @ts-ignore
export const defaultDict = (init) =>
    new Proxy(
        {},
        {
            get: (target: {}, name) =>
                name in target
                    // @ts-ignore
                    ? target[name]
                    // @ts-ignore
                    : (target[name] =
                        typeof init === "function" ? new init().valueOf() : init),
        }
    );