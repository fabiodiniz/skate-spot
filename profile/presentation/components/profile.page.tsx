import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { LogoutCase } from 'auth/data/useCases/logout.case'

import DashboardTemplate from 'shared/presentation/components/dashboard.template'

import ButtonAtom from 'shared/presentation/components/button.atom'

import theme from 'shared/presentation/styles/settings/theme.style'

import { useMemo } from 'react'
import styled from 'styled-components/native'
import { container } from 'tsyringe'

const ProfilePage: React.FC = () => {
  const logout = useMemo(
    () => container.resolve<LogoutCase>(DependencyEnum.LOGOUT_CASE),
    []
  )

  return (
    <StyledPage testID="ProfilePage">
      <DashboardTemplate>
        <StyledTitle>Profile</StyledTitle>
        <ButtonAtom onPress={() => logout.execute()} title="Logout" />
      </DashboardTemplate>
    </StyledPage>
  )
}

const StyledPage = styled.SafeAreaView`
  flex: 1;
  background: black;
  padding: 12px;
`

const StyledTitle = styled.Text`
  font-size: 24px;
  color: ${theme.colors.white};
  font-family: 'RobotoSlab_900Black';
  margin: 12px;
`

export default ProfilePage
