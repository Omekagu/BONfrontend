import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function ExtComp ({ head, tag, onPress, icon }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.87}
      style={styles.touchable}
    >
      <LinearGradient
        colors={['#fff', '#f7e4e3']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.container}
      >
        <View style={styles.textBlock}>
          <Text style={styles.head}>{head}</Text>
          <Text style={styles.tag}>{tag}</Text>
        </View>
        <View style={styles.iconWrap}>{icon}</View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    marginHorizontal: 10,
    marginVertical: 7,
    borderRadius: 20,
    overflow: 'hidden'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: '#a63932',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.09,
        shadowRadius: 12
      },
      android: {
        elevation: 6
      }
    }),
    borderWidth: 1,
    borderColor: '#f3e7e4'
  },
  textBlock: {
    flex: 1,
    marginRight: 20
  },
  head: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    marginBottom: 7,
    letterSpacing: 0.3
  },
  tag: {
    fontSize: 17,
    fontWeight: '800',
    color: '#a63932',
    letterSpacing: 0.2
  },
  iconWrap: {
    backgroundColor: '#f8e3e1',
    borderRadius: 16,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 36,
    minHeight: 36
  }
})
