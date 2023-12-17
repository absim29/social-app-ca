import { generatePostHtml } from "./generateHtml.js";

const postsContainer = document.querySelector('#posts-display');

/**
 * Displays filtered posts in the specified container.
 *
 * @async
 * @function
 * @param {Array} posts - An array of post objects to display.
 * @param {Function} filterCallback - A callback function used to filter posts.
 * @returns {Promise<void>} A promise that resolves when the posts are displayed.
 *
 * @example
 * // Example usage:
 * const posts = [...] // Array of post objects
 * const filterCallback = (post) => post.category === 'Data';
 * await displayPosts(posts, filterCallback);
 */

async function displayPosts(posts, filterCallback) {
    postsContainer.textContent = '';

    posts.filter(filterCallback).forEach((post) => {
        const currentPost = generatePostHtml(post);
        postsContainer.appendChild(currentPost);
    });

}

export { displayPosts };