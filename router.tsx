import DependencyEnum from 'shared/domain/entities/dependencyEnum'
import { RouterEnum } from 'shared/domain/entities/routes'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import LoginFactory from 'auth/application/login.factory'
import ProfileFactory from 'profile/application/profile.factory'
import SpotsFactory from 'spots/application/spots.factory'

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
        Spots: '/',
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
          <>
            <Stack.Screen
              name={RouterEnum.SPOTS}
              options={{ headerShown: false }}
            >
              {() => <SpotsFactory />}
            </Stack.Screen>
            <Stack.Screen
              name={RouterEnum.PROFILE}
              options={{
                headerShown: false,
                transitionSpec: {
                  open: { animation: 'spring', config: { speed: 100000 } },
                  close: { animation: 'spring', config: { speed: 100000 } },
                },
              }}
            >
              {() => <ProfileFactory />}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen
            name={RouterEnum.LOGIN}
            options={{ headerShown: false }}
          >
            {() => <LoginFactory />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
})

export default Router
