import { SocialProvider } from '@components/auth/SocialProvider'
import { Colors } from '@constants/Colors'
import { Button } from '@ui/Button'
import { Image } from 'expo-image'
import * as WebBrowser from 'expo-web-browser'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignInScreen() {
  const openLink = async () => {
    WebBrowser.openBrowserAsync('https://www.google.com')
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 40,
        paddingTop: 20,
      }}
    >
      <Image
        source={require('@img/todoist-logo.png')}
        style={{
          height: 40,
        }}
        contentFit='contain'
      />
      <Image
        source={require('@img/login.png')}
        style={{
          height: 280,
        }}
        contentFit='contain'
      />
      <View style={{ gap: 20, marginHorizontal: 40 }}>
        <SocialProvider
          strategy='oauth_google'
          icon='logo-google'
          title='Continue with Google'
        />

        <SocialProvider
          strategy='oauth_apple'
          icon='logo-apple'
          title='Continue with Apple'
        />
        <Button title='Continue with Email' icon='mail' theme='provider' />

        <Text
          style={{ fontSize: 12, textAlign: 'center', color: Colors.lightText }}
        >
          By continuing, you agree to our{' '}
          <Text
            style={{
              color: Colors.lightText,
              fontSize: 12,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
            onPress={openLink}
          >
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text
            style={{
              color: Colors.lightText,
              fontSize: 12,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
            onPress={openLink}
          >
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </SafeAreaView>
  )
}
