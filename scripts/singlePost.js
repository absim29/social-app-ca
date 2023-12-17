import { getSinglePost, singlePostId } from "./utils/getSinglePost.js";
import { generatePostHtml } from "./utils/generateHtml.js";


const postsContainer = document.querySelector('#posts-display');

/**
 * Displays a single post in the posts container.
 *
 * @async
 * @function
 * @param {Array<Object>} posts - An array containing a single post to be displayed.
 * @returns {Promise<void>} A promise that resolves after the post is displayed in the container.
 *
 * @example
 * // Example usage:
 * const singlePost = { title: 'Sample Post', body: 'This is a sample post.', tags: ['tag1', 'tag2'], media: 'https://example.com/image.jpg' };
 * await displaySinglePost([singlePost]);
 */

async function displaySinglePost(posts) {
    postsContainer.textContent = '';

    posts.forEach((post) => {
        const currentPost = generatePostHtml(post);
        postsContainer.appendChild(currentPost);
    });
}

/**
 * Main function to be executed on the page to display a single post.
 */
async function main() {
    const postId = singlePostId();
    const post = await getSinglePost(postId);
    displaySinglePost([post]);
}

main();

