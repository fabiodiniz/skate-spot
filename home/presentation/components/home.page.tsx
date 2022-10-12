import LogoutCaseImpl from 'auth/data/useCases/classes/logout.caseImpl'

import ButtonAtom from 'shared/presentation/components/button.atom'

import theme from 'shared/presentation/styles/settings/theme.style'

import DependencyEnum from 'shared/application/dependencyEnum'
import styled from 'styled-components/native'
import { container } from 'tsyringe'

const HomePage: React.FC = () => {
  const logout = container.resolve<LogoutCaseImpl>(DependencyEnum.LOGOUT_CASE)

  return (
    <StyledPage testID="HomePage">
      <ButtonAtom onPress={() => logout.execute()} title="Logout"></ButtonAtom>
    </StyledPage>
  )
}

const StyledPage = styled.View`
  padding: 100px;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${theme.colors.primary};
`

export default HomePage
