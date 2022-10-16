import DashboardTemplate from 'shared/presentation/components/dashboard.template'

import theme from 'shared/presentation/styles/settings/theme.style'

import styled from 'styled-components/native'

const ProfilePage: React.FC = () => {
  return (
    <StyledPage testID="ProfilePage">
      <DashboardTemplate>
        <StyledTitle>Profile</StyledTitle>
      </DashboardTemplate>
    </StyledPage>
  )
}

const StyledPage = styled.SafeAreaView`
  flex: 1;
  background: black;
`

const StyledTitle = styled.Text`
  font-size: 24px;
  color: ${theme.colors.white};
  font-family: 'RobotoSlab_900Black';
  margin: 12px;
`

export default ProfilePage
