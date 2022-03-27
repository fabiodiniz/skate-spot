import { LoginCase } from 'auth/useCases/login.case'
import { SignUpWithGoogleCase } from 'auth/useCases/signUpWithGoogle.case'

import ButtonAtom from 'shared/components/button.atom'
import InputAtom from 'shared/components/input.atom'

import { useState, useEffect } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  login: LoginCase
  signUpWithGoogle: SignUpWithGoogleCase
}

const LoginFormOrganism: React.FC<Props> = ({
  login,
  signUpWithGoogle,
}: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const onLoginPress = async () => {
    setIsDisabled(true)
    try {
      console.log(await login.execute({ email, password }))
    } catch (error) {
      console.error(error)
    }
    setIsDisabled(false)
  }

  const onSignUpPress = () => signUpWithGoogle.execute()

  useEffect(() => {
    setIsDisabled(!login.isValid({ email, password }))
  }, [email, password])

  return (
    <StyledView testID="LoginFormOrganism">
      <StyledInputAtom
        keyboardType="email-address"
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
        title="Login With Google"
        onPress={onSignUpPress}
      />
    </StyledView>
  )
}

const StyledView = styled(View)`
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