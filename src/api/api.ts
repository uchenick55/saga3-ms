import axios from 'axios'

export const apiJsonPlaceholder = {
    getPosts: async () => {
        const response = await axios.get (`https://jsonplaceholder.typicode.com/posts`)
        return response.data
    }
}