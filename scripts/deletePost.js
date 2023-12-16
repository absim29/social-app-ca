import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { singlePostId } from "./utils/getSinglePost.js";

const deleteButton = document.querySelector('#delete-button');

/**
 * Deletes a post from the server using the post ID.
 *
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when the post is successfully deleted.
 *
 * @example
 * // Example usage:
 * // Ensure that the singlePostId function is available and provides the post ID.
 * await deletePost();
 */

async function deletePost() {
    const postId = singlePostId();
    const response = await fetchData(`${POSTS_API_URL}/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    }, true);
    console.log(response);
}

/**
 * Event listener function for the click event on the delete button.
 * Prevents the default behavior, deletes the post, and redirects to the feed page.
 */
deleteButton.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        await deletePost();
        window.location.href = '/feed';
    } catch (error) {
        document.querySelector('#error').innerHTML = '<div class="error">You do not have permission to delete this post (you are not the author).</div>';
    }
});