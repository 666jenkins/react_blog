import { BASE_API_URL } from '../shared/constants';

const fetchUsers = () => {
    return fetch(`${BASE_API_URL}/users`)
        .then(res => res.json())
}

const fetchUser = (id) => {
    return fetch(`${BASE_API_URL}/users/${id}`)
        .then(res => res.json())
}

export {
    fetchUser,
    fetchUsers
}