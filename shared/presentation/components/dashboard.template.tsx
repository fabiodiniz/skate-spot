import HeaderOrganism from 'shared/presentation/components/header.organism'
import MenuOrganism from 'shared/presentation/components/menu.organism'

import theme from 'shared/presentation/styles/settings/theme.style'

import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

type Props = {
  children?: ReactNode
}

const DashboardTemplate: React.FC<Props> = props => {
  return (
    <StyledView testID="DashboardTemplate">
      <StyledHeaderOrganism />
      <StyledContent>{props.children}</StyledContent>
      <StyledMenuOrganism />
    </StyledView>
  )
}

const StyledHeaderOrganism = styled(HeaderOrganism)`
  flex-grow: 0;
  flex-shrink: 0;
`

const StyledContent = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.primary};
`

const StyledMenuOrganism = styled(MenuOrganism)`
  flex-grow: 0;
  flex-shrink: 0;
`

const StyledView = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`

export default DashboardTemplate
