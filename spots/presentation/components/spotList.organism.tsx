import { Spot } from 'spots/domain/entities/spot'

import SpotCardMolecule from 'spots/presentation/components/spotCard.molecule'

import theme from 'shared/presentation/styles/settings/theme.style'

import React from 'react'
import styled from 'styled-components/native'

const SpotListOrganism: React.FC = props => {
  const fakeSpot: Spot = {
    id: '1',
    name: 'Quadrespra',
    description: 'Spot 1 description',
    latitude: 0,
    longitude: 0,
    image:
      'https://cemporcentoskate.com.br/wp-content/uploads/2022/08/Na-sessa%CC%83o_QUADRESTA.00_02_45_00.Quadro002-2-759x500.jpg',
    address: '',
  }

  return (
    <StyledView testID="SpotListOrganism" {...props}>
      <StyledTitle>Spots</StyledTitle>
      <SpotCardMolecule spot={fakeSpot} />
      <SpotCardMolecule spot={fakeSpot} />
      <SpotCardMolecule spot={fakeSpot} />
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  padding: 12px;
  overflow: auto;
`

const StyledTitle = styled.Text`
  font-size: 24px;
  color: ${theme.colors.white};
  font-family: 'RobotoSlab_900Black';
`

export default SpotListOrganism
