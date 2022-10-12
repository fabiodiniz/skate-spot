import HeaderOrganism from 'shared/presentation/components/header.organism'
import MenuOrganism from 'shared/presentation/components/menu.organism'
import SpotListOrganism from 'spots/presentation/components/spotList.organism'

import styled from 'styled-components/native'

const HomePage: React.FC = () => {
  return (
    <StyledPage testID="HomePage">
      <StyledHeaderOrganism />
      <StyledSpotListOrganism />
      <StyledHMenuOrganism />
    </StyledPage>
  )
}

const StyledPage = styled.SafeAreaView`
  flex: 1;
  background: black;
`

const StyledHeaderOrganism = styled(HeaderOrganism)`
  flex-grow: 0;
  flex-shrink: 0;
`

const StyledSpotListOrganism = styled(SpotListOrganism)`
  flex: 1;
`

const StyledHMenuOrganism = styled(MenuOrganism)`
  flex-grow: 0;
  flex-shrink: 0;
`

export default HomePage
