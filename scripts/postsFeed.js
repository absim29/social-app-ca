import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { checkUserLogin } from "./utils/checkUserLogin.js";
import { displayPosts } from "./utils/displayPosts.js";
import { filerPostHandler } from "./utils/searchUtil.js";
import { sortPosts } from "./utils/sortUtil.js";

let posts = [];

const searchInput = document.querySelector('#searchInput');
const sortButton = document.querySelector('#sort-button');

/**
 * Event listener function for the input event on the search input.
 * Updates the displayed posts based on the current search input.
 */
searchInput.addEventListener('input', () => {
    displayPosts(posts, filerPostHandler);
});

/**
 * Event listener function for the click event on the sort button.
 * Sorts the posts and updates the displayed posts accordingly.
 */
sortButton.addEventListener('click', () => {
    sortPosts(posts);
    displayPosts(posts, filerPostHandler);
});

/**
 * Main function to be executed on page load.
 * Checks if the user is logged in, if true displays the posts.
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves after the posts are fetched and displayed, if the user is logged in.
 *
 * @example
 * // Example usage:
 * // Ensure that the checkUserLogin, fetchData, displayPosts, and filterPostHandler functions are available.
 * await main();
 */

async function main() {
    const isLoggedIn = checkUserLogin();

    if (isLoggedIn) {
        posts = await fetchData(POSTS_API_URL, { method: 'GET' }, true);
        displayPosts(posts, filerPostHandler);
    } else {
        console.log('Not logged in');
    }
}

main();