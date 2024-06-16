import axios from 'axios'

export const loadPosts = async ({ request: { signal } }) => {
    const { data } = await axios.get('http://127.0.0.1:3000/posts', {
        signal,
        headers: {
            'content-type': "application/json"
        }
    });

    return data;
}

export const loadPost = async ({ request: { signal }, params: { id } }) => {
    const { data } = await axios.get(`http://127.0.0.1:3000/posts/${id}`, {
        signal,
        headers: {
            'content-type': "application/json"
        }
    });

    return data;
}