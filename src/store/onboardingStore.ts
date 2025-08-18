import { OnboardingState } from '@types/onboarding/onboarding.types'
import { deleteItemAsync, getItem, setItem } from 'expo-secure-store'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useOnboardingStore = create(
  persist<OnboardingState>(
    (set) => ({
      pendingVerification: false,
      hasCompletedOnboarding: false,
      setPendingVerification: (pendingVerification: boolean) =>
        set((state) => {
          return {
            ...state,
            pendingVerification,
          }
        }),
      completeOnboarding: (hasCompletedOnboarding: boolean) =>
        set((state) => {
          return {
            ...state,
            hasCompletedOnboarding,
          }
        }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
)
