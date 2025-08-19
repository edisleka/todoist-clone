import { useAuth } from '@clerk/clerk-expo'
import { Button } from '@ui/Button'
import { Text, View } from 'react-native'

export default function BrowseScreen() {
  const { signOut } = useAuth()
  return (
    <View>
      <Text>Browse Screen</Text>
      <Button title='Sign Out' onPress={() => signOut()} />
    </View>
  )
}
