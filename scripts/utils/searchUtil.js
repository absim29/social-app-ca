/**
 * Filters a post based on whether its title matches the search input.
 *
 * @function
 * @param {Object} post - The post object to be filtered.
 * @param {string} post.title - The title of the post.
 * @returns {boolean} Returns true if the post title contains the search input (case-insensitive and trimmed),
 *                   otherwise returns false.
 *
 * @example
 * // Example usage:
 * const searchInput = document.getElementById('search-input');
 * const post = { title: 'Sample Post' };
 * const isMatching = filterPostHandler(post);
 * if (isMatching) {
 *   // The post title matches the search input
 *   console.log('Matching post:', post);
 * } else {
 *   // The post title does not match the search input
 *   console.log('Non-matching post:', post);
 * }
 */

function filerPostHandler(post) {

    if (post.title.toLowerCase().match(searchInput.value.toLowerCase().trim())) {
        return true;
    }
    return false;
}

export { filerPostHandler };