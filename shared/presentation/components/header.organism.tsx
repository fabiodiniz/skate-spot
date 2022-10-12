import InputAtom from 'shared/presentation/components/input.atom'
import LogoAtom from 'shared/presentation/components/logo.atom'

import theme from 'shared/presentation/styles/settings/theme.style'

import React from 'react'
import styled from 'styled-components/native'

const HeaderOrganism: React.FC = props => {
  return (
    <StyledView testID="HeaderOrganism" {...props}>
      <StyledLogoAtom />
      <StyledInputAtom />
    </StyledView>
  )
}

const StyledView = styled.View`
  width: 100%;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  background: ${theme.colors.primary};
`

const StyledLogoAtom = styled(LogoAtom)`
  height: 60px;
  width: 70px;
`

const StyledInputAtom = styled(InputAtom)`
  flex: 1;
  margin-left: 8px;
`

export default HeaderOrganism
