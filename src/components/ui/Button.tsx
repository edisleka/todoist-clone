import { Colors } from '@constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { ButtonProps } from '@types/button/button'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function Button({
  title,
  titleLoading,
  theme = 'primary',
  isLoading = false,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      style={{
        backgroundColor:
          theme === 'primary'
            ? Colors.primary
            : theme === 'provider'
            ? Colors.provider
            : theme === 'success'
            ? Colors.success
            : Colors.primary,
        padding: 12,
        borderRadius: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.lightBorder,
      }}
      disabled={isLoading}
      {...rest}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        {icon && <Ionicons name={icon} size={24} color='black' />}
        {title && (
          <Text style={{ fontSize: 20, fontWeight: '500' }}>
            {isLoading ? titleLoading : title}
          </Text>
        )}
      </View>
    </Pressable>
  )
}
