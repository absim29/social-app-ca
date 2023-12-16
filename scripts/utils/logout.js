import { removeFromLocalStorage } from "./localStorageUtil.js";

const logoutButton = document.querySelector('#logout-button');

/**
 * Event listener function for the logout button click event.
 * Clears the user's authentication token from local storage and redirects to the index page.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Example usage:
 * logoutButton.addEventListener('click', handleLogout);
 */

logoutButton.addEventListener('click', () => {
    removeFromLocalStorage('accessToken', token);
    removeFromLocalStorage('userEmail', userLoginData.email);
    window.location.href = '/index.html';
});