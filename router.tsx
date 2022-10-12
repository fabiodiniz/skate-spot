import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import LoginFactory from 'auth/application/login.factory'
import HomeFactory from 'home/application/home.factory'

import { NavigationContainer, Route } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createURL } from 'expo-linking'
import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { Text } from 'react-native'
import { container } from 'tsyringe'

const Router: React.FC = observer(() => {
  const formatter = useCallback(
    (
      _options: Record<string, unknown> | undefined,
      route: Route<string, object | undefined> | undefined
    ) => `${route?.name} - SkateSpot - Onde os picos DIY ganham força!`,
    []
  )

  const linking = {
    prefixes: [createURL('/'), 'skate-spot://'],
    config: {
      screens: {
        Home: '/',
        Login: '/login',
      },
    },
  }

  const Stack = createStackNavigator()

  const sessionStore = container.resolve<SessionStorePort>(
    DependencyEnum.SESSION_STORE_ADAPTER
  )

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading…</Text>}
      documentTitle={{ formatter }}
    >
      <Stack.Navigator initialRouteName="Login">
        {sessionStore.get() ? (
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {() => <HomeFactory />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {() => <LoginFactory />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
})

export default Router
