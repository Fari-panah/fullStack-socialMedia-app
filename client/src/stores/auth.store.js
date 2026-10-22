import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import loginService from '../services/login'
const useAuthStore = create(
  persist(
    (set) => ({
      currentUser: null,

      actions: {
        login: async (credentials) => {
          const user = await loginService.login(credentials)

          set({
            currentUser: user,
          })

          return user
        },

        logout: () => {
          set({
            currentUser: null,
          })
        },
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)
export const useCurrentUser = () => useAuthStore(state => state.currentUser)
export const useAuthActions = () =>  useAuthStore(state => state.actions)

export default useAuthStore