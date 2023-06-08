import axios from 'axios'

export const apiJsonPlaceholder = {
    getPosts: async () => {
        return await axios.get (`https://jsonplaceholder.typicode.com/posts`)
    }
}