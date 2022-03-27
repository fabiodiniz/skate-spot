import { LogoutCase } from 'auth/useCases/logout.case'

import ButtonAtom from 'shared/components/button.atom'

import theme from 'shared/styles/settings/theme.style'

import { View, Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  logout: LogoutCase
}

const HomePage: React.FC<Props> = ({ logout }: Props) => {
  return (
    <StyledPage testID="HomePage">
      <ButtonAtom onPress={() => logout.execute()} title="Logout"></ButtonAtom>
    </StyledPage>
  )
}

const StyledPage = styled(View)`
  padding: 100px;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${theme.colors.primary};
`

export default HomePage
