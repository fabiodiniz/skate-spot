import LoginFactory from 'auth/application/login.factory'
import HomeFactory from 'home/application/home.factory'

import { NavigationContainer, Route } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createURL } from 'expo-linking'
import { Text } from 'react-native'

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

const Router: React.FC = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading…</Text>}
      documentTitle={{ formatter }}
    >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeFactory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginFactory}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
