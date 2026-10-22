import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useThemeStore = create(
    persist(
        set => ({
            mode: 'light',

            toggleTheme: () => 
                set(state => ({
                    mode: state.mode === 'light' ? 'dark' : 'light',
                }))

        }),
        {
        name: 'theme-storage',
      }
    )
)
export const useThemeMode = () => useThemeStore(state => state.mode)
export const useThemeActions = () => useThemeStore(state => state.toggleTheme)

export default useThemeStore