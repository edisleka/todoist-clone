import { Stack } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{ contentStyle: { backgroundColor: Colors.background } }}
    >
      <Stack.Screen name='(protected)' options={{ headerShown: false }} />
    </Stack>
  )
}
