import DashboardTemplate from 'shared/presentation/components/dashboard.template'

import SpotListOrganism from 'spots/presentation/components/spotList.organism'

import styled from 'styled-components/native'

const SpotsPage: React.FC = () => {
  return (
    <StyledPage testID="SpotsPage">
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

export default SpotsPage
