import DashboardTemplate from 'shared/presentation/components/dashboard.template'

import SpotListOrganism from 'spots/presentation/components/spotList.organism'

import styled from 'styled-components/native'

const HomePage: React.FC = () => {
  return (
    <StyledPage testID="HomePage">
      <DashboardTemplate>
        <StyledSpotListOrganism />
      </DashboardTemplate>
    </StyledPage>
  )
}

const StyledPage = styled.SafeAreaView`
  flex: 1;
  background: black;
`

const StyledSpotListOrganism = styled(SpotListOrganism)`
  flex: 1;
`

export default HomePage
