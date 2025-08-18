import { Link } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function Step2Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Step 2 Screen</Text>
      <Link href='/success' asChild>
        <Button title='Go to Success' />
      </Link>
    </View>
  )
}
