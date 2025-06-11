import { View, Text, Linking } from 'react-native'
import React from 'react'
import MoreComp from '@/component/MoreComp'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CustomerService () {
  return (
    <SafeAreaView style={{ alignSelf: 'center' }}>
      <Text style={{ fontSize: 26, fontWeight: '900' }}>
        CustomerService page
      </Text>

      <MoreComp
        onPress={() => Linking.openURL(`tel:08120190530`)}
        name={'Call Us'}
        icon={
          <MaterialCommunityIcons
            name='account-question-outline'
            size={24}
            color='#000'
          />
        }
      />
      <MoreComp
        onPress={() => router.push('/CustomerService')}
        name={'Chat With Us'}
        icon={
          <MaterialCommunityIcons
            name='account-question-outline'
            size={24}
            color='#000'
          />
        }
      />
    </SafeAreaView>
  )
}
