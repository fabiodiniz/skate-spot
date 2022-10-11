import 'reflect-metadata'

import { ReloadSessionCase } from 'auth/data/useCases/reloadSession.case'

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
import { useState, useEffect } from 'react'
import RootStore from 'rootStore'
import Router from 'router'
import DependencyEnum from 'shared/application/dependencyEnum'
import { container } from 'tsyringe'
import 'shared/application/dependencyInjector'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCumgnkz5DLRL60oSgIX3kiNaUH9ggcnTA',
  authDomain: 'skatespots-270600.firebaseapp.com',
  databaseURL: 'https://skatespots-270600.firebaseio.com',
  projectId: 'skatespots-270600',
  storageBucket: 'skatespots-270600.appspot.com',
  messagingSenderId: '178575816099',
  appId: '1:178575816099:web:48f0ffe5e271331acdd616',
  measurementId: 'G-7NZEFHV0QN',
}

initializeApp(firebaseConfig)

const rootStore = container.resolve<RootStore>(DependencyEnum.ROOT_STORE)

const reloadSession = container.resolve<ReloadSessionCase>(
  DependencyEnum.RELOAD_SESSION_CASE
)

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

  const [sessionLoaded, setSessionLoaded] = useState(false)

  useEffect(() => {
    reloadSession.execute().then(() => setSessionLoaded(true))
  }, [])

  if (fontsLoaded && sessionLoaded) {
    return <Router rootStore={rootStore} />
  } else {
    return <AppLoading />
  }
}

export default registerRootComponent(App)
