import { getFromLocalStorage } from "./utils/localStorageUtil.js";

/**
 * Performs a network request using the Fetch API and returns the parsed JSON response.
 *
 * @async
 * @function
 * @param {string} url - The URL for the API endpoint.
 * @param {object} [options={ method: 'GET' }] - Additional options for the fetch request.
 * @param {string} [options.method='GET'] - The HTTP method for the request.
 * @param {boolean} [shouldUseAuth=false] - Indicates whether to include authentication headers.
 * @returns {Promise<object>} A promise that resolves with the parsed JSON response from the API.
 *
 * @throws {Error} Throws an error if the API call is unsuccessful or if there's an issue with the response.
 *
 * @example
 * // Example usage:
 * const url = 'https://api.example.com/data';
 * const options = { method: 'POST', body: JSON.stringify({ key: 'value' }) };
 * const shouldUseAuth = true;
 * try {
 *   const data = await fetchData(url, options, shouldUseAuth);
 *   console.log('Data:', data);
 * } catch (error) {
 *   console.error('Error fetching data:', error.message);
 * }
 */

export async function fetchData(url, options = { method: 'GET' }, shouldUseAuth = false,) {

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

}