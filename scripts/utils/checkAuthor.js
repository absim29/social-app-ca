import { POSTS_API_URL } from "../constants.js";
import { fetchData } from "../fetchData.js";
import { singlePostId } from "./getSinglePost.js";
import { getFromLocalStorage } from "./localStorageUtil.js";

const checkAuthor = (userEmail, postUserEmail) => userEmail === postUserEmail;
const userEmail = getFromLocalStorage('userEmail');

async function ifAuthor() {
    const postId = singlePostId();
    console.log(postId);
    const url = `${POSTS_API_URL}/${postId}?_author=true`;
    console.log(url)
    const post = await fetchData(url, { method: 'GET' }, true);
    console.log(post);
    const isAuthor = checkAuthor(userEmail, post.author.email);
    console.log(isAuthor);
    return post;
}
ifAuthor();

export { ifAuthor };





