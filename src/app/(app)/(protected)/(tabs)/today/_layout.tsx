import { MoreButton } from '@/components/ui/MoreButton'
import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'

export default function TodayLayout() {
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
          title: 'Today',
          headerRight: () => <MoreButton />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.success,
          },
          headerTitleStyle: {
            color: 'red',
          },
        }}
      />
    </Stack>
  )
}
