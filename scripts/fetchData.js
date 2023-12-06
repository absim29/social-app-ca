import { getFromLocalStorage } from "./utils/localStorageUtil.js";

export async function fetchData(url, options = { method: 'POST' }, shouldUseAuth = false,) {
    try {
        let fetchOptions = {
            ...options,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (shouldUseAuth) {
            const accessToken = getFromLocalStorage('accessToken');
            fetchOptions = {
                ...fetchOptions,
                headers: { ...fetchOptions.headers, Authorization: `Bearer ${accessToken}` }
            };
        }
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error('API call unsuccessful');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error with API call', error);
    }
}