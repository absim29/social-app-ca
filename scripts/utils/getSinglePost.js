import { POSTS_API_URL } from "../constants.js";
import { fetchData } from "../fetchData.js";

/**
 * Retrieves the post ID from the current URL's query parameters.
 *
 * @function
 * @returns {string | null} The post ID if found in the query parameters, or null if not present.
 *
 * @example
 * // Example usage:
 * const postId = singlePostId();
 * if (postId) {
 *   // Use the retrieved post ID in further operations
 *   console.log(`Post ID: ${postId}`);
 * } else {
 *   console.error('Post ID not found in the URL.');
 * }
 */

function singlePostId() {
    const postId = new URLSearchParams(window.location.search).get('id');
    return postId;
}

/**
 * Fetches a single post from the server using the provided post ID.
 *
 * @async
 * @function
 * @param {string} id - The unique identifier of the post to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves with the retrieved post object,
 *                                or null if the post with the given ID is not found.
 *
 * @example
 * // Example usage:
 * const postId = '123'; // Replace with the actual post ID
 * const post = await getSinglePost(postId);
 * if (post) {
 *   // Process the retrieved post
 *   console.log('Single Post:', post);
 * } else {
 *   console.error(`Post with ID ${postId} not found.`);
 * }
 */

async function getSinglePost(id) {
    const singlePostApi = `${POSTS_API_URL}/${id}`;
    const currentPost = await fetchData(singlePostApi, {
        method: 'GET',
    }, true);
    return currentPost;
}

export { singlePostId, getSinglePost }