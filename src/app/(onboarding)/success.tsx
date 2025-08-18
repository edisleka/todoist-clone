import { useOnboardingStore } from '@store/onboardingStore'
import { Button, Text, View } from 'react-native'

export default function SuccessScreen() {
  const { completeOnboarding } = useOnboardingStore()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Success Screen</Text>
      <Button
        title='Complete Onboarding'
        onPress={() => completeOnboarding(true)}
      />
    </View>
  )
}
