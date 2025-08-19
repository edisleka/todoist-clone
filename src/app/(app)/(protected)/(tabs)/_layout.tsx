import { Tabs } from '@/components/tabs/Tabs'
import { Colors } from '@/constants/Colors'

export default function TabLayout() {
  return (
    <Tabs
      hapticFeedbackEnabled
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name='today'
        options={{
          title: 'Today',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused
              ? require('@img/moment-fill.png')
              : require('@img/moment.png'),
        }}
      />
      <Tabs.Screen
        name='upcoming'
        options={{
          title: 'Upcoming',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused
              ? require('@img/calendar-fill.png')
              : require('@img/calendar.png'),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused
              ? require('@img/magnifying-glass-fill.png')
              : require('@img/magnifying-glass.png'),
        }}
      />
      <Tabs.Screen
        name='browse'
        options={{
          title: 'Browse',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            focused
              ? require('@img/google-docs-fill.png')
              : require('@img/google-docs.png'),
        }}
      />
    </Tabs>
  )
}
