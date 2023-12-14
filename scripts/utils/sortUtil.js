let ascendingOrder = true;

function sortPosts(posts) {
    posts.sort((a, b) => {
        const order = ascendingOrder ? 1 : -1;
        return order * a.title.localeCompare(b.title);
    });
    ascendingOrder = !ascendingOrder;
}

export { sortPosts };