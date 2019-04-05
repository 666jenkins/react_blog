import { BASE_API_URL } from '../shared/constants';

const fetchPosts = () => {
    return fetch(`${BASE_API_URL}/posts`)
        .then(res => res.json())
}

const fetchPost = (id) => {
    return fetch(`${BASE_API_URL}/posts/${id}`)
        .then(res => res.json())
}

const fetchSingleUserPosts = (id) => {
    return fetch(`${BASE_API_URL}/posts/?userId=${id}`)
        .then(res => res.json())
}

export {
    fetchPost,
    fetchPosts,
    fetchSingleUserPosts
}