import React from 'react'
import { Stack, Redirect, useSegments } from 'expo-router'
import Toast from 'react-native-toast-message'
import { useAuth } from '@/hooks/useAuth'
import { AlertNotificationRoot } from 'react-native-alert-notification'

export default function _layout () {
  const { isAuthenticated, loading } = useAuth()
  const segments = useSegments()

  if (loading) return null

  // If in auth group and authenticated, redirect to tabs
  if (isAuthenticated && segments[0] === 'registration') {
    return <Redirect href='/(tabs)/Home' />
  }

  // If in tabs group and not authenticated, redirect to login
  if (!isAuthenticated && segments[0] === '(tabs)') {
    return <Redirect href='/registration/Login' />
  }

  // If not authenticated, show only registration/login screens
  return (
    <AlertNotificationRoot>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#a63932' },
          headerTintColor: '#fff',
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
          gestureEnabled: true
        }}
      >
        <Stack.Screen
          name='index'
          options={{ headerShown: false, animation: 'flip' }}
        />
        <Stack.Screen
          name='registration/WelcomeScreen'
          options={{ headerShown: false, animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name='registration/SignUpScreen'
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='registration/Register'
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='registration/Login'
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='registration/ForgotPassword'
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false, animation: 'flip' }}
        />
        <Stack.Screen
          name='(stacks)'
          options={{ headerShown: false, animation: 'flip' }}
        />
        <Stack.Screen name='[missing]' options={{ title: '404' }} />
      </Stack>
      <Toast />
    </AlertNotificationRoot>
  )
}
