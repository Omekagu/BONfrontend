import { View, Text, Linking } from 'react-native'
import React from 'react'
import MoreComp from '@/component/MoreComp'
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CustomerService () {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#a63932',
        flex: 1,
        paddingHorizontal: 20
      }}
    >
      <MoreComp
        onPress={() => Linking.openURL(`tel:08120190530`)}
        name={'Call Us'}
        icon={<Feather name='phone-call' size={24} color='black' />}
      />
      <MoreComp
        onPress={() => router.push('https://wa.me/2348120190530')}
        name={'Chat With Us'}
        icon={<FontAwesome name='whatsapp' size={24} color='black' />}
      />
    </SafeAreaView>
  )
}
