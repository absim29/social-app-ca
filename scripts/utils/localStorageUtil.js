/**
 * Adds a key-value pair to the local storage.
 *
 * @function
 * @param {string} key - The key under which the value will be stored.
 * @param {string} value - The value to be stored.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * addToLocalStorage('username', 'john_doe');
 */
export function addToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

/**
 * Retrieves the value associated with the specified key from local storage.
 */
export function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

/**
 * Removes the item associated with the specified key from local storage.
 */
export function removeFromLocalStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userEmail');
}