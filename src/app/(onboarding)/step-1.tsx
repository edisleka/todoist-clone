import { Link } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function Step1Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Step 1 Screen</Text>
      <Link href='/step-2' asChild>
        <Button title='Go to Step 2' />
      </Link>
    </View>
  )
}
