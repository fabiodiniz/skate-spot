import LoginFactory from 'auth/application/login.factory'
import HomeFactory from 'home/application/home.factory'

import { NavigationContainer, Route } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createURL } from 'expo-linking'
import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { Text } from 'react-native'
import RootStore from 'rootStore'
import DependencyEnum from 'shared/application/dependencyEnum'
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

  const rootStore = container.resolve<RootStore>(DependencyEnum.ROOT_STORE)

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading…</Text>}
      documentTitle={{ formatter }}
    >
      <Stack.Navigator initialRouteName="Login">
        {rootStore.sessionStore.get() ? (
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {() => <HomeFactory sessionStore={rootStore.sessionStore} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {() => <LoginFactory sessionStore={rootStore.sessionStore} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
})

export default Router
