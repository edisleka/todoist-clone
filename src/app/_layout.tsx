import { Colors } from '@/constants/Colors'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { useOnboardingStore } from '@store/onboardingStore'
import { Stack } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'

const InitialLayout = () => {
  const { isSignedIn, isLoaded } = useAuth()
  const { hasCompletedOnboarding } = useOnboardingStore()

  const showOnboarding = !hasCompletedOnboarding && !isSignedIn
  const showAuth = !isSignedIn && hasCompletedOnboarding
  const showProtected = isSignedIn && hasCompletedOnboarding

  // console.log('showOnboarding', showOnboarding)
  // console.log('showAuth', showAuth)
  // console.log('showProtected', showProtected)
  // console.log('isLoaded', isLoaded)
  console.log('isSignedIn', isSignedIn)

  // const navigationState = useMemo(() => {
  //   const showOnboarding = !hasCompletedOnboarding && !isSignedIn
  //   const showAuth = !isSignedIn && hasCompletedOnboarding
  //   const showProtected = !!isSignedIn && hasCompletedOnboarding

  //   return {
  //     showOnboarding,
  //     showAuth,
  //     showProtected,
  //   }
  // }, [hasCompletedOnboarding, isSignedIn])

  // const { showOnboarding, showAuth, showProtected } = navigationState

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    )
  }

  return (
    <Stack>
      <Stack.Protected guard={showOnboarding}>
        <Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={showAuth}>
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!!showProtected}>
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
