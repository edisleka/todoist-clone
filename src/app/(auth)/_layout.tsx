import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{ contentStyle: { backgroundColor: Colors.background } }}
    >
      <Stack.Screen name='sign-in' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up' options={{ headerShown: false }} />
      <Stack.Screen name='verification' options={{ headerShown: false }} />
      <Stack.Screen name='terms' options={{ headerShown: false }} />
    </Stack>
  )
}
