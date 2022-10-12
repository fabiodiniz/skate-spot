import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { LogoutCase } from 'auth/data/useCases/logout.case'

import ButtonAtom from 'shared/presentation/components/button.atom'

import theme from 'shared/presentation/styles/settings/theme.style'

import styled from 'styled-components/native'
import { container } from 'tsyringe'

const HomePage: React.FC = () => {
  const logout = container.resolve<LogoutCase>(DependencyEnum.LOGOUT_CASE)

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
