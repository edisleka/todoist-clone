import { Link } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function OnboardingWelcomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Onboarding Welcome Screen</Text>
      <Link href='/step-1' asChild>
        <Button title='Go to Step 1' />
      </Link>
    </View>
  )
}
