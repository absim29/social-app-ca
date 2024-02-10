import { LOGIN_API_URL, POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { displayPosts } from "./utils/displayPosts.js";
import { addToLocalStorage } from "./utils/localStorageUtil.js";

const form = document.querySelector('#login-form');
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');

/**
 * Logs in a user by sending a POST request to the login API endpoint.
 *
 * @async
 * @function
 * @param {Object} user - The user object containing login credentials.
 * @param {string} user.email - The user's email.
 * @param {string} user.password - The user's password.
 * @returns {Promise<void>} A promise that resolves after a successful login.
 *
 * @throws {Error} Throws an error if the login API call is unsuccessful or if there's an issue with the response.
 *
 * @example
 * // Example usage:
 * const user = { email: 'user@example.com', password: 'password123' };
 * try {
 *   await loginUser(user);
 *   console.log('User logged in successfully.');
 * } catch (error) {
 *   console.error('Error logging in:', error.message);
 * }
 */

async function loginUser(user) {
    try {
        const postBody = JSON.stringify(user);
        const userLoginData = await fetchData(LOGIN_API_URL, {
            method: 'POST',
            body: postBody,
        }, false);
        const token = userLoginData.accessToken;
        addToLocalStorage('accessToken', token);
        addToLocalStorage('userEmail', userLoginData.email);
        window.location.href = '../feed';
    } catch (error) {
        document.querySelector('#error').innerHTML = '<div class="error">Wrong email or password</div>';
    }
}

/**
 * Event listener function for the submission of the login form.
 * Prevents the default form submission, logs in the user, and displays posts.
 */
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userLoginDetails = {
        email: email.value,
        password: password.value,
    };
    await loginUser(userLoginDetails);
    displayPosts();
})
