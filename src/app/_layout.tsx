import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Stack } from 'expo-router'

const InitialLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='(app)' options={{ headerShown: false }} />
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
