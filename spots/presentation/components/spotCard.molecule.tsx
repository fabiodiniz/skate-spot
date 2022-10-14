import { Spot } from 'spots/domain/entities/spot'

import theme from 'shared/presentation/styles/settings/theme.style'

import React from 'react'
import styled from 'styled-components/native'

type Props = {
  spot: Spot
}

const SpotCardMolecule: React.FC<Props> = props => {
  return (
    <StyledView testID="SpotCardMolecule" {...props}>
      <StyledTitle testID="SpotCardMoleculeTitle">
        {props.spot.name}
      </StyledTitle>
      <StyledImage source={{ uri: props.spot.image }} />
    </StyledView>
  )
}

const StyledView = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
`

const StyledTitle = styled.Text`
  font-size: 18px;
  color: ${theme.colors.white};
  font-family: 'RobotoSlab_900Black';
  margin-top: 12px;
`

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-top: 12px;
`

export default SpotCardMolecule
