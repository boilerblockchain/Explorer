// returns current user and id
// data format

// {"user": {"username": "Jane", "name": "Jane Doe", "email": "jane@example.com"}}

import { fetcher } from '/lib/fetch';
import useSWR from 'swr';

export function useCurrentUser() {
    return useSWR('/api/user', fetcher);
}

export function useUser(id) {
    return useSWR(`/api/users/${id}`, fetcher);
}