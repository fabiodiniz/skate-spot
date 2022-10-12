import MenuItemAtom from 'shared/presentation/components/menuItem.atom'

import React from 'react'
import styled from 'styled-components/native'

const MenuOrganism: React.FC = props => {
  return (
    <StyledView testID="MenuOrganism" {...props}>
      <MenuItemAtom active label="Spots" />
      <MenuItemAtom label="Profile" />
    </StyledView>
  )
}

const StyledView = styled.View`
  flex-direction: row;
  height: 90px;
`

export default MenuOrganism
