import { API_SOCIAL_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Update requires a postID");
    }
    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body: JSON.stringify(postData),
    });

    // console.log(await response.json());
    return await response.json();
}