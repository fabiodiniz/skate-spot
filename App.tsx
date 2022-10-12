import 'reflect-metadata'

import DependencyEnum from 'shared/domain/entities/dependencyEnum'

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
import FirebaseConfig from 'firebase.json'
import { initializeApp } from 'firebase/app'
import { useState, useEffect } from 'react'
import Router from 'router'
import { container } from 'tsyringe'

import 'shared/application/dependencyInjector'
import 'firebase/auth'

initializeApp(FirebaseConfig)

const App: React.FC = () => {
  const reloadSession = container.resolve<ReloadSessionCase>(
    DependencyEnum.RELOAD_SESSION_CASE
  )

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
    return <Router />
  } else {
    return <AppLoading />
  }
}

export default registerRootComponent(App)
