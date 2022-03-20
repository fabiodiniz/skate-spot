import ButtonAtom from 'shared/presentation/components/button.atom'
import InputAtom from 'shared/presentation/components/input.atom'

import { View } from 'react-native'
import styled from 'styled-components/native'

const LoginFormOrganism: React.FC = () => {
  const onPress = console.log

  return (
    <StyledView testID="LoginFormOrganism">
      <StyledInputAtom
        keyboardType="email-address"
        placeholder="Email"
        onSubmitEditing={onPress}
        returnKeyType="go"
      />
      <StyledInputAtom
        secureTextEntry
        placeholder="Password"
        onSubmitEditing={onPress}
        returnKeyType="go"
      />
      <ButtonAtom style={{ marginTop: 72 }} title="Login" onPress={onPress} />
      <ButtonAtom
        flat
        style={{ marginTop: 32 }}
        title="Sign Up"
        onPress={onPress}
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
