import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const SpacerAtom: React.FC = props => {
  return <StyledView testID="SpacerAtom" {...props} />
}

const StyledView = styled(View)`
  flex: 1;
`

export default SpacerAtom
