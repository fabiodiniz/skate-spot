import LoginFactory from 'auth/factories/login.factory'
import HomeFactory from 'home/factories/home.factory'

import { NavigationContainer, Route } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createURL } from 'expo-linking'
import { observer } from 'mobx-react-lite'
import { Text } from 'react-native'
import RootStore from 'rootStore'

const formatter = (
  _options: Record<string, unknown> | undefined,
  route: Route<string, object | undefined> | undefined
) => `${route?.name} - SkateSpot - Onde os picos DIY ganham força!`

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

type Props = { rootStore: RootStore }

const Router: React.FC<Props> = observer(({ rootStore }: Props) => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading…</Text>}
      documentTitle={{ formatter }}
    >
      <Stack.Navigator initialRouteName="Login">
        {rootStore.sessionStore.get() ? (
          <Stack.Screen
            name="Home"
            component={HomeFactory}
            options={{ headerShown: false }}
          />
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
