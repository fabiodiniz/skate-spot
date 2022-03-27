import { LoginCase } from 'auth/useCases/login.case'
import { SignUpWithGoogleCase } from 'auth/useCases/signUpWithGoogle.case'

import LoginFormOrganism from 'auth/components/loginForm.organism'

import BackgroundMolecule from 'auth/components/background.molecule'

import LogoAtom from 'shared/components/logo.atom'
import SpacerAtom from 'shared/components/spacer.atom'

import theme from 'shared/styles/settings/theme.style'

import { ScrollView, View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  login: LoginCase
  signUpWithGoogle: SignUpWithGoogleCase
}

const LoginPage: React.FC<Props> = ({ login, signUpWithGoogle }: Props) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
    >
      <StyledPage testID="LoginPage">
        <SpacerAtom />
        <StyledLogoAtom />
        <StyledLoginFormOrganism
          login={login}
          signUpWithGoogle={signUpWithGoogle}
        />
        <SpacerAtom />
        <StyledBackground>
          <BackgroundMolecule />
        </StyledBackground>
      </StyledPage>
    </ScrollView>
  )
}

const StyledPage = styled(View)`
  background-color: ${theme.colors.primary};
  max-width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const StyledLoginFormOrganism = styled(LoginFormOrganism)`
  width: 100%;
  margin: 0 32px;
`

const StyledLogoAtom = styled(LogoAtom)`
  height: 185px;
  width: 266px;
  margin-top: 12px;
`

const StyledBackground = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`

export default LoginPage
