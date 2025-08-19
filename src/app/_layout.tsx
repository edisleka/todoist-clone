import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { useOnboardingStore } from '@store/onboardingStore'
import { Stack } from 'expo-router'

const InitialLayout = () => {
  const { isSignedIn } = useAuth()
  const { hasCompletedOnboarding } = useOnboardingStore()

  return (
    <Stack>
      <Stack.Protected guard={!hasCompletedOnboarding && !isSignedIn}>
        <Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isSignedIn && hasCompletedOnboarding}>
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!!isSignedIn && hasCompletedOnboarding}>
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
