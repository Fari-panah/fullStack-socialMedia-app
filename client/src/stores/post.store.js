import { create } from 'zustand'
import postService from '../services/posts'

const usePostStore = create((set, get) => ({
    posts: [],
    actions: {
        add: async (newPost) => {
            const createdPost = await postService.create(newPost)
            set(state=> ({posts: [...state.posts, createdPost]}))
        },
        initialize: async () => {
            const posts = await postService.getAll()
            set(() => ({posts}))
        },
        updatePost: async (id) => {
            const post = get().posts.find(p => p.id === id)
            const updated = await postService.update(id, post)
            set(state => ({ posts: state.posts.map(p => p.id === id ? updated : p)}))
        },
        deletePost: async (id) => {
            await postService.remove(id)
            set(state => ({ posts: state.posts.filter(p => p.id !== id)}))
        }

    }
}))

export const usePosts = () => usePostStore(state => state.posts)
export const usePostActions = () => usePostStore(state => state.actions)