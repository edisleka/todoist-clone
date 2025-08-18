import { OAuthStrategy } from '@clerk/types'
import { Ionicons } from '@expo/vector-icons'

export interface SocialProviderProps {
  strategy: OAuthStrategy
  icon: keyof typeof Ionicons.glyphMap
  title?: string
}
