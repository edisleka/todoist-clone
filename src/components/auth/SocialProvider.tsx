import { useSSO } from '@clerk/clerk-expo'
import { SocialProviderProps } from '@types/auth/socialProvider'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button } from '../ui/Button'

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export function SocialProvider({ strategy, icon, title }: SocialProviderProps) {
  useWarmUpBrowser()
  const { startSSOFlow } = useSSO()
  const [isLoading, setIsLoading] = useState(false)

  const onPress = useCallback(async () => {
    setIsLoading(true)
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl: AuthSession.makeRedirectUri(),
      })
      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    } finally {
      setIsLoading(false)
    }
  }, [strategy, startSSOFlow])

  return (
    <View>
      <Button
        onPress={onPress}
        theme='provider'
        title={title}
        titleLoading={`Signing in with ${title}...`}
        icon={icon}
        isLoading={isLoading}
      />
    </View>
  )
}
