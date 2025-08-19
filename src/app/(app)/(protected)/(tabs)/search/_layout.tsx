import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'

export default function SearchLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Search',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  )
}
