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
import { initializeApp } from 'firebase/app'

import Router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyCumgnkz5DLRL60oSgIX3kiNaUH9ggcnTA',
  authDomain: 'skatespots-270600.firebaseapp.com',
  databaseURL: 'https://skatespots-270600.firebaseio.com',
  projectId: 'skatespots-270600',
  storageBucket: 'skatespots-270600.appspot.com',
  messagingSenderId: '178575816099',
  appId: '1:178575816099:web:48f0ffe5e271331acdd616',
  // measurementId: 'G-7NZEFHV0QN',
}

initializeApp(firebaseConfig)

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
