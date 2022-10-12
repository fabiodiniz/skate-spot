import React from 'react'
import styled from 'styled-components/native'

const SpotCardMolecule: React.FC = props => {
  return <StyledView testID="SpotCardMolecule" {...props} />
}

const StyledView = styled.View`
  flex: 1;
`

export default SpotCardMolecule
