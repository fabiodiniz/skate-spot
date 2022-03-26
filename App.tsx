/* eslint-disable no-restricted-imports */
import { useFonts } from '@expo-google-fonts/inter'
import {
  RobotoSlab_100Thin,
  RobotoSlab_200ExtraLight,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
  RobotoSlab_800ExtraBold,
  RobotoSlab_900Black,
} from '@expo-google-fonts/roboto-slab'
import { registerRootComponent } from 'expo'
import AppLoading from 'expo-app-loading'

import Router from './router'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_100Thin,
    RobotoSlab_200ExtraLight,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
    RobotoSlab_800ExtraBold,
    RobotoSlab_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Router />
}

export default registerRootComponent(App)
