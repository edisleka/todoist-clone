import { Stack } from 'expo-router'

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='step-1' options={{ headerShown: false }} />
      <Stack.Screen name='step-2' options={{ headerShown: false }} />
      <Stack.Screen name='success' options={{ headerShown: false }} />
    </Stack>
  )
}
