import { Colors } from '@/constants/Colors'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Link, Stack } from 'expo-router'

export default function BrowseLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.backgroundAlt },
        headerStyle: { backgroundColor: Colors.success },
        headerTitleStyle: { color: 'red' },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Browse',
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  )
}

const HeaderLeft = () => {
  const { user } = useUser()
  return (
    <Image
      source={{ uri: user?.imageUrl }}
      style={{ width: 32, height: 32, borderRadius: 16 }}
    />
  )
}

const HeaderRight = () => {
  return (
    <Link href='/browse/settings' asChild>
      <Ionicons name='settings-outline' size={24} color={Colors.primary} />
    </Link>
  )
}
