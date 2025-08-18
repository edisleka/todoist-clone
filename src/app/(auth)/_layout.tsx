import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up' options={{ headerShown: false }} />
      <Stack.Screen
        name='email-verification'
        options={{ headerShown: false }}
      />
      <Stack.Screen name='terms' options={{ headerShown: false }} />
    </Stack>
  )
}
