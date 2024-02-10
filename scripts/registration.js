import { REGISTER_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";

const form = document.querySelector('#registration-form');
const name = document.querySelector('#reg-name');
const email = document.querySelector('#reg-email');
const password = document.querySelector('#reg-password');

/**
 * Registers a new user by sending a POST request to the register API endpoint.
 *
 * @async
 * @function
 * @param {Object} user - The user object containing registration details.
 * @param {string} user.email - The user's email.
 * @param {string} user.password - The user's password.
 * @returns {Promise<void>} A promise that resolves after a successful user registration.
 *
 * @throws {Error} Throws an error if the registration API call is unsuccessful or if there's an issue with the response.
 *
 * @example
 * // Example usage:
 * const newUser = { email: 'newuser@example.com', password: 'newpassword123' };
 * try {
 *   await registerUser(newUser);
 *   console.log('User registered successfully.');
 * } catch (error) {
 *   console.error('Error registering user:', error.message);
 * }
 */

async function registerUser(user) {
    try {
        const postBody = JSON.stringify(user);
        const myData = await fetchData(REGISTER_API_URL, {
            method: 'POST',
            body: postBody,
        });
        console.log(myData);
        window.location.href = '../';
    } catch (error) {
        document.querySelector('#error').innerHTML = '<div class="error">Please check that the information is correct</div>';
    }
}

/**
 * Event listener function for the submission of the registration form.
 * Prevents the default form submission and registers a new user.
 */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userRegistrationDetails = {
        name: name.value,
        email: email.value,
        password: password.value,
    };
    registerUser(userRegistrationDetails);
});