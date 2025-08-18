import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { useOnboardingStore } from '@store/onboardingStore'
import { Stack } from 'expo-router'

const InitialLayout = () => {
  const { hasCompletedOnboarding } = useOnboardingStore()
  const isAuthenticated = false

  return (
    <Stack>
      <Stack.Protected guard={!hasCompletedOnboarding && !isAuthenticated}>
        <Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isAuthenticated && hasCompletedOnboarding}>
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={isAuthenticated && hasCompletedOnboarding}>
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  )
}
