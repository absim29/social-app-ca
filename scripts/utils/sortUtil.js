/**
 * Sorts an array of posts based on the post titles in ascending or descending order.
 *
 * @function
 * @param {Array} posts - An array of post objects to be sorted.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * const posts = [
 *   { title: 'Post C' },
 *   { title: 'Post A' },
 *   { title: 'Post B' }
 * ];
 * sortPosts(posts);
 * console.log('Sorted posts:', posts);
 */

let ascendingOrder = true;

function sortPosts(posts) {
    posts.sort((a, b) => {
        const order = ascendingOrder ? 1 : -1;
        return order * a.title.localeCompare(b.title);
    });
    ascendingOrder = !ascendingOrder;
}

export { sortPosts };