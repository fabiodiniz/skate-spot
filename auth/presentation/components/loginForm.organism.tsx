import { LoginCase } from 'auth/data/useCases/login.case'
import { SignInWithGoogleCase } from 'auth/data/useCases/signInWithGoogle.case'

import ButtonAtom from 'shared/presentation/components/button.atom'
import InputAtom from 'shared/presentation/components/input.atom'

import { useState, useEffect } from 'react'
import DependencyEnum from 'shared/application/dependencyEnum'
import styled from 'styled-components/native'
import { container } from 'tsyringe'

const LoginFormOrganism: React.FC = () => {
  const login = container.resolve<LoginCase>(DependencyEnum.LOGIN_CASE)
  const signInWithGoogle = container.resolve<SignInWithGoogleCase>(
    DependencyEnum.SIGN_IN_WITH_GOOGLE_CASE
  )

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const onLoginPress = async () => {
    if (isDisabled) return
    setIsDisabled(true)
    try {
      await login.execute({ email, password })
    } catch (error) {
      window.alert(error)
    }
    setIsDisabled(false)
  }

  const onSignInGooglePress = () => signInWithGoogle.execute()

  useEffect(() => {
    setIsDisabled(!login.isValid({ email, password }))
  }, [email, password])

  return (
    <StyledView testID="LoginFormOrganism">
      <StyledInputAtom
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Email"
        onSubmitEditing={onLoginPress}
        returnKeyType="go"
        onChange={event => setEmail(event.nativeEvent.text)}
      />
      <StyledInputAtom
        secureTextEntry
        placeholder="Password"
        onSubmitEditing={onLoginPress}
        returnKeyType="go"
        onChange={event => setPassword(event.nativeEvent.text)}
      />
      <ButtonAtom
        style={{ marginTop: 72 }}
        title="Login"
        disabled={isDisabled}
        onPress={onLoginPress}
      />
      <ButtonAtom
        flat
        style={{ marginTop: 32 }}
        title="Sign In With Google"
        onPress={onSignInGooglePress}
      />
    </StyledView>
  )
}

const StyledView = styled.View`
  width: 100%;
  padding: 48px;
  align-items: center;
`

const StyledInputAtom = styled(InputAtom)`
  width: 100%;
  max-width: 400px;
  margin-top: 32px;
`

export default LoginFormOrganism
