import { Tabs } from '@/components/tabs/Tabs'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='today'
        options={{
          title: 'Today',
          tabBarIcon: ({ focused }) =>
            focused
              ? require('@img/moment-fill.png')
              : require('@img/moment.png'),
        }}
      />
      <Tabs.Screen
        name='upcoming'
        options={{
          title: 'Upcoming',
          tabBarIcon: ({ focused }) =>
            focused
              ? require('@img/calendar-fill.png')
              : require('@img/calendar.png'),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) =>
            focused
              ? require('@img/magnifying-glass-fill.png')
              : require('@img/magnifying-glass.png'),
        }}
      />
      <Tabs.Screen
        name='browse'
        options={{
          title: 'Browse',
          tabBarIcon: ({ focused }) =>
            focused
              ? require('@img/google-docs-fill.png')
              : require('@img/google-docs.png'),
        }}
      />
    </Tabs>
  )
}
