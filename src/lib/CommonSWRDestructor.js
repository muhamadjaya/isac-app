export default function CommonSWRDestructor(swrResult) {
    const { error, data, isValidating, mutate } = swrResult
    return {
        error,
        isValidating,
        mutate,
        status: getStatus(error, data),
        ...data
    }
};

export function getStatus(error, data) {
    let status;
    switch (true) {
        case typeof data !== 'undefined':
            status = "success"
            break;
        case typeof error !== 'undefined':
            status = "error"
            break;
        default:
            status = "loading"
            break;
    }

    return status;
}
