import { Ionicons } from '@expo/vector-icons'
import { PressableProps } from 'react-native'

type ButtonTheme = 'primary' | 'provider' | 'success'

export interface ButtonProps extends PressableProps {
  title?: string
  titleLoading?: string
  theme?: ButtonTheme
  icon?: keyof typeof Ionicons.glyphMap
  isLoading?: boolean
}
