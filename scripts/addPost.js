import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";

const postForm = document.querySelector('#post-form');

const title = document.querySelector('#post-title');
const body = document.querySelector('#post-body');
const tags = document.querySelector('#post-tags');
const media = document.querySelector('#post-media');

/**
 * Adds a new post by sending a POST request to the server.
 *
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when the new post is successfully added.
 *
 * @example
 * // Example usage:
 * // Ensure that the HTML document contains elements with the IDs 'title', 'body', 'tags', and 'media'.
 * // Also, ensure that POSTS_API_URL is a valid API endpoint.
 * await addNewPost();
 */

async function addNewPost() {
    const post = {
        title: title.value,
        body: body.value,
        tags: tags.value.split(' '),
        media: media.value,
    };
    const response = await fetchData(POSTS_API_URL, {
        method: 'POST',
        body: JSON.stringify(post),
    }, true);
    console.log(response);
}

/**
 * Event listener function for the submission of the new post form.
 * Prevents the default form submission, adds a new post, and redirects to the feed page.
 */
postForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await addNewPost();
    window.location.href = '/feed';
});

