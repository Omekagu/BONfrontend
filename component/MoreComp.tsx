import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function MoreComp ({ name, icon, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.touchable}
      activeOpacity={0.85}
    >
      <LinearGradient
        colors={['#fff', '#f6e7e5']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.moreComp}
      >
        <View style={styles.iconWrap}>{icon}</View>
        <Text style={styles.moreText}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    marginHorizontal: 6,
    marginVertical: 5,
    borderRadius: 16,
    overflow: 'hidden'
  },
  moreComp: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    // Subtle shadow for iOS, elevation for Android
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#a63932',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10
      },
      android: {
        elevation: 6
      }
    }),
    borderWidth: 1,
    borderColor: '#e8d0d0'
  },
  iconWrap: {
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8e3e1',
    borderRadius: 12,
    width: 40,
    height: 40,
    shadowColor: '#fbc02d33',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 2
  },
  moreText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 0.3
  }
})
