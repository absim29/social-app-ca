/**
 * Checks if the user is logged in by verifying the presence of an access token in the local storage.
 *
 * @function
 * @returns {boolean} Returns true if the user is logged in (access token is present), otherwise returns false.
 * @throws {Error} Throws an error if there is an issue with accessing the local storage.
 *
 * @example
 * // Example usage:
 * const isLoggedIn = checkUserLogin();
 * if (isLoggedIn) {
 *   // User is logged in, return true
 * } else {
 *   // User is not logged in, return false
 * }
 */

function checkUserLogin() {
    const token = localStorage.getItem('accessToken');
    if (token) {
        return true;
    } else {
        return false;
    }
}
export { checkUserLogin };