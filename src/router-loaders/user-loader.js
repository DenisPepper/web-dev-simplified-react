import axios from 'axios'

export const loadUsers = async ({ request: { signal } }) => {
    const { data } = await axios.get('http://127.0.0.1:3000/users', {
        signal,
        headers: {
            'content-type': "application/json"
        }
    });

    return data;
}