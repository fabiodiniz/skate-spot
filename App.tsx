import 'reflect-metadata'
import 'firebase/auth'

import LoginCaseImpl from 'auth/data/useCases/classes/login.caseImpl'
import ReloadSessionCaseImpl from 'auth/data/useCases/classes/reloadSession.caseImpl'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

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
import { useState } from 'react'
import RootStore from 'rootStore'
import Router from 'router'
import Container from 'typedi'

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

// Container.set('sessionStore.adapter', new SessionStoreAdapter())
// Container.set('rootStore', new RootStore(Container.get('sessionStore.adapter')))
// Container.set('firebaseAuth.adapter', new FirebaseAuthAdapter())
// Container.set(
//   'login.caseImpl',
//   new LoginCaseImpl(
//     Container.get('sessionStore.adapter'),
//     Container.get('firebaseAuth.adapter')
//   )
// )
// Container.set(
//   'reloadSession.caseImpl',
//   new ReloadSessionCaseImpl(
//     Container.get('sessionStore.adapter'),
//     Container.get('firebaseAuth.adapter')
//   )
// )

const rootStore = Container.get(RootStore)

const reloadSession = Container.get(ReloadSessionCaseImpl)

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

  reloadSession.execute().then(() => setSessionLoaded(true))

  if (fontsLoaded && sessionLoaded) {
    return <Router rootStore={rootStore} />
  } else {
    return <AppLoading />
  }
}

export default registerRootComponent(App)
