// payload contains the error message in format:
// {"error" {"message": some message} } 
// if format not met, return generic something went wrong message

export const fetcher = (...args) => {
    return fetch(...args).then(async (res) => {
        let payload;
        try {
            if (res.status === 204) return null; // 204 does not have body
                payload = await res.json();
        } catch (e) {
            /* noop */
        }
        if (res.ok) {
            return payload;
        } else {
            return Promise.reject(payload.error || new Error('Something went wrong'));
        }
    });
};

