import { MoreButton } from '@/components/ui/MoreButton'
import { Stack } from 'expo-router'

export default function UpcomingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: 'Upcoming',
          headerShadowVisible: false,
          headerRight: () => <MoreButton />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  )
}
