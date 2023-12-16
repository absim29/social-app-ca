import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { getSinglePost, singlePostId } from "./utils/getSinglePost.js";


const postForm = document.querySelector('#post-form');

const title = document.querySelector('#post-title');
const body = document.querySelector('#post-body');
const tags = document.querySelector('#post-tags');
const media = document.querySelector('#post-media');

/**
 * Edits an existing post on the server using the post ID.
 *
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves when the post is successfully edited.
 *
 * @example
 * // Example usage:
 * // Ensure that the HTML document contains elements with the IDs 'title', 'body', 'tags', and 'media'.
 * // Also, ensure that singlePostId function is available and provides the post ID.
 * await editPost();
 */

async function editPost() {
    const post = {
        title: title.value,
        body: body.value,
        tags: tags.value.split(' '),
        media: media.value,
    };
    const response = await fetchData(`${POSTS_API_URL}/${singlePostId()}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post),
    }, true);
    console.log(response);
}

/**
 * Event listener function for the submission of the post edit form.
 * Prevents the default form submission, edits the post, and redirects to the feed page.
 */
postForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await editPost();
    window.location.href = '/feed';
});

/**
 * Sets the values of form elements with the data from the provided post object.
 *
 * @function
 * @param {Object} post - The post object containing title, body, tags, and media information.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body/content of the post.
 * @param {string} post.tags - The tags associated with the post.
 * @param {string} post.media - The URL of the media (image) associated with the post.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * const post = { title: 'Sample Post', body: 'This is a sample post.', tags: 'tag1 tag2', media: 'https://example.com/image.jpg' };
 * currentPostData(post);
 */
function currentPostData(post) {
    title.value = post.title;
    body.value = post.body;
    tags.value = post.tags;
    media.value = post.media;
}

/**
 * Retrieves a single post based on the post ID, then updates the form with the post data.
 *
 * @async
 * @function
 * @returns {Promise<void>} A promise that resolves after the form is updated with the post data.
 *
 * @example
 * // Example usage:
 * // Ensure that the singlePostId and getSinglePost functions are available.
 * await main();
 */
async function main() {
    const postId = singlePostId();
    const post = await getSinglePost(postId);
    currentPostData(post);
}
main();